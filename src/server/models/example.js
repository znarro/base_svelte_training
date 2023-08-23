class Example {
  async getAll(filters = {}) {
    let data = [
      { id: 12, name: "Ejemplo 1", quantity: 3, price: 10 },
      { id: 13, name: "Ejemplo 2", quantity: 4, price: 150 },
      { id: 14, name: "Ejemplo 3", quantity: 3, price: 120 },
      { id: 20, name: "Ejemplo 4", quantity: 10, price: 10 },
      { id: 49, name: "Ejemplo 5", quantity: 2, price: 2000 },
    ];

    if (filters.hasOwnProperty("search")) {
      data = data.filter((item) => item.name.toLowerCase().includes(filters.search));
      console.log("🚀 ~ file: product.js:14 ~ Product ~ getAll ~ data:", data);
    }

    return { status: 200, data}
  }
}

export default Example;
