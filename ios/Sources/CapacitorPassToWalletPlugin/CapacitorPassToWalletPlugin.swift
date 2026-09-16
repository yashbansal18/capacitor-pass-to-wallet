import Foundation
import Capacitor
import PassKit

@objc(CapacitorPassToWalletPlugin)
public class CapacitorPassToWalletPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorPassToWalletPlugin"
    public let jsName = "CapacitorPassToWallet"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "addToWallet", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "addMultipleToWallet", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CapacitorPassToWallet()

    @objc func addToWallet(_ call: CAPPluginCall) {
        let data = call.getString("base64") ?? ""

        if let dataPass = Data(base64Encoded: data, options: .ignoreUnknownCharacters) {
            if let pass = try? PKPass(data: dataPass) {
                if PKPassLibrary().containsPass(pass) {
                    call.reject("{\"code\": 100,\"message\": \"Pass already added\"}")
                } else {
                    if let vc = PKAddPassesViewController(pass: pass) {
                        call.resolve(["value": implementation.echo("SUCCESS")])
                        DispatchQueue.main.async {
                            self.bridge?.viewController?.present(vc, animated: true, completion: nil)
                        }
                    }
                }
            } else {
                call.reject("{\"code\": 101,\"message\": \"PKPASS file has invalid data\"}")
            }
        } else {
            call.reject("{\"code\": 102,\"message\": \"Error with base64 data\"}")
        }
    }

    @objc func addMultipleToWallet(_ call: CAPPluginCall) {
        let data = call.getArray("base64") ?? []

        var pkPasses = [PKPass]()
        var duplicatedAmount = 0

        for base64 in data {
            if let dataPass = Data(base64Encoded: base64 as! String, options: .ignoreUnknownCharacters) {
                if let pass = try? PKPass(data: dataPass) {
                    if !PKPassLibrary().containsPass(pass) {
                        pkPasses.append(pass)
                    } else {
                        duplicatedAmount += 1
                    }
                }
            }
        }

        if pkPasses.count > 0 {
            if let vc = PKAddPassesViewController(passes: pkPasses) {
                call.resolve(["value": implementation.echo("SUCCESS")])
                DispatchQueue.main.async {
                    self.bridge?.viewController?.present(vc, animated: true, completion: nil)
                }
            }
        } else {
            let error = duplicatedAmount == 0
                ? "{\"code\": 103,\"message\": \"PKPASSES file has invalid data\"}"
                : "{\"code\": 100,\"message\": \"Passes already added\"}"
            call.reject(error)
        }
    }
}
