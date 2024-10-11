// controller index
const index = (req, res) => {
    res.app.render("index", { title: "Express MVC" });
}

// controller kontak
const kontak = (req, res) => {
    res.render("kontak", { title: "Ini Halaman Kontak" });
}

module.exports = { index, kontak };
