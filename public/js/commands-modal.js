// const modal = document.getElementById("modal");
// const modalName = document.getElementById("modal-name");
// const modalDesc = document.getElementById("modal-desc");
// const modalOptions = document.getElementById("modal-options");
// const modalImg = document.getElementById("modal-img");
// const modalClose = document.getElementById("modal-close");

// document.querySelectorAll(".detail-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     modalName.textContent = btn.dataset.name;
//     modalDesc.textContent = btn.dataset.desc;
//     modalImg.src = `/images/commands/${btn.dataset.name}.png`;
//     modalImg.alt = btn.dataset.name;

//     const options = JSON.parse(btn.dataset.options);
//     modalOptions.innerHTML = "";
//     if (options.length === 0) {
//       modalOptions.innerHTML = "<li>オプションなし</li>";
//     } else {
//       options.forEach(opt => {
//         const li = document.createElement("li");
//         li.textContent = `${opt.name}: ${opt.description || "説明なし"}`;
//         modalOptions.appendChild(li);
//       });
//     }
//     modal.style.display = "block";
//   });
// });

// modalClose.addEventListener("click", () => modal.style.display = "none");
// window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
