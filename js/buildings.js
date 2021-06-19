class Buildings {
    static numInstances = 0
    _id = ++Buildings.numInstances; // ID Tracker for easier management

    constructor(address) {
        this.id = this.getId();
        this._address = address;
    }

    getId() {
        return this._id.toString();
    }

    getAddress() {
        return this._address;
    }

    getImage() {
        return `img/${this._image}.png`;
    }

    setImg(image) {
        this._image = image;
    }

    showDetails() {
        alert(`Bâtiment ${this.id}`);  // Default Show Details of every building
    }

    show(canvas) {
        let container = document.createElement("div");  // The container for the nice animation
        container.setAttribute("class", "container");
        container.setAttribute("id", this.getAddress());

        let img = document.createElement("img");
        img.setAttribute("id", this.getId());
        img.setAttribute("class", "building");
        img.setAttribute("src", this.getImage());
        img.setAttribute("alt", this.getAddress());

        container.appendChild(img); // container hack, cant set :after on pictures
        canvas.appendChild(container); // adding to canvas
    }
}

class House extends Buildings {
    constructor(address, rooms) {
        super(address);

        this._rooms = rooms;
        super.setImg("house");
    }

    getRooms() {
        return this._rooms;
    }

    showDetails() {
        alert(`Maison, ${this.getRooms()} pièces`);
    }
}

class Hospital extends Buildings {
    constructor(address, services) {
        super(address);

        this._services = services;
        super.setImg("hospital");
    }

    getServices() {
        return this._services;
    }

    showDetails() {
        alert(`hôpital, ${this.getServices()} services`);
    }
}

class Firehouse extends Buildings {
    constructor(address, vehicles, workers) {
        super(address);

        this._workers = workers;
        this._vehicles = vehicles;
        super.setImg("firehouse");
    }

    getWorkers() {
        return this._workers;
    }

    getVehicles() {
        return this._vehicles;
    }

    showDetails() {
        alert(`Caserne, ${this.getWorkers()} pompiers, ${this.getVehicles()} véhicules d'interventions`);
    }
}

class Tenement extends Buildings {
    constructor(address, floors, apartment) {
        super(address);

        this._floors = floors;
        this._apartment = apartment;
        super.setImg("tenement");
    }

    getFloors() {
        return this._floors;
    }

    getApartment() {
        return this._apartment;
    }


    showDetails() {
        alert(`Immeuble, ${this.getFloors()} étages ${this.getApartment()} appartements`);
    }
}