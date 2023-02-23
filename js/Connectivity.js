class Connectivity {
    constructor() {
        this.Name = "testing";
        this.IsConnected = false;
    }

    Connect() {
        this.IsConnected = true;
    }

    Disconnect() {
        this.IsConnected = false;
    }
}

export { Connectivity };