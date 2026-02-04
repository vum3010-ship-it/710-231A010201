// BÀI 1
if (document.getElementById("products")) {
  const products = ["Iphone", "Samsung", "Xiaomi", "Oppo", "Vivo"];
  const container = document.getElementById("products");

  function render(list) {
    container.innerHTML = "";
    list.forEach(p => {
      const div = document.createElement("div");
      div.textContent = p;
      container.appendChild(div);
    });
  }

  render(products);

  document.getElementById("search").addEventListener("input", e => {
    const keyword = e.target.value.toLowerCase().trim();
    const result = products.filter(p => p.toLowerCase().includes(keyword));
    document.getElementById("error").textContent =
      result.length ? "" : "Không tìm thấy sản phẩm";
    render(result);
  });
}

// BÀI 2
if (document.getElementById("register")) {
  document.getElementById("register").addEventListener("submit", e => {
    e.preventDefault();
    const pass = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if (!regex.test(pass) || !agree) {
      document.getElementById("msg").textContent = "Dữ liệu không hợp lệ";
      return;
    }

    localStorage.setItem("user", "registered");
    document.getElementById("msg").textContent = "Đăng ký thành công";
  });
}

// BÀI 3
if (document.getElementById("timer")) {
  let time = 600;
  const timer = document.getElementById("timer");

  const interval = setInterval(() => {
    time--;
    let m = String(Math.floor(time / 60)).padStart(2, "0");
    let s = String(time % 60).padStart(2, "0");
    timer.textContent = `${m}:${s}`;

    if (time <= 60) timer.classList.add("warning");

    if (time <= 0) {
      clearInterval(interval);
      alert("Hết giờ!");
    }
  }, 1000);
}