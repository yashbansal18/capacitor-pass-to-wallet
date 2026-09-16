import XCTest
@testable import CapacitorPassToWalletPlugin

class CapacitorPassToWalletTests: XCTestCase {
    func testEcho() {
        let plugin = CapacitorPassToWallet()
        let value = "test"
        XCTAssertEqual(plugin.echo(value), value)
    }
}
