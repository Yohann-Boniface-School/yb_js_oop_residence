window.onload = function () {
    let canvas = document.getElementById("canvas");
    // The drawing surface

    let residence = [
        new Tenement("4 rue du coin", 3, 16),
        new House("1 rue du coin", 3),
        new House("2 rue du coin", 6),
        new House("5 avenue Marshal", 3),
        new Tenement("6 rue paysanne", 4, 25),
        new Hospital("hotel dieu", 10),
        new House("7 rue de la pie", 4),
        new House("5 rue de la pie", 3),
        new House("3 rue de la pie", 4),
        new House("8 rue de la paix", 4),
        new House("25 rue de la maison", 7),
        new House("2 rue Victor Hugo", 7),
        new Firehouse("4 rue Victor Hugo", 4, 11),
        new Tenement("4 rue du lys", 5, 36),
        new Tenement("2 rue de la croix", 3, 19),
        new Tenement("6 rue du lys", 4, 25),
        new House("7 chemin pavé", 2),
        new Tenement("8 rue du soldat anglais", 4, 22),
        new House("12 rue du soldat anglais", 4),
        new House("14 rue du soldat anglais", 3),

    ];

    residence.forEach(
        (build, index) => {
            build.show(canvas);  // blit the building on the canvas

            // thanks the id tracker
            document.getElementById((index + 1).toString()).onload = function () {
                // on Click alert box
                this.onclick = function () {
                    build.showDetails();
                }
            }
        }
    )
}