document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("output");
  const tr = document.createElement("tr");
  tr.id = "loading";
  const td = document.createElement("td");
  const startTime = Date.now();
  let arr = new Array(3); 

  if (tbody.children.length === 0) {
    td.textContent = "Loading...";
    td.colSpan = 2;
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  // First promise
  const p1 = new Promise((resolve) => {
    setTimeout(() => {
      arr[0] = Date.now();
      resolve("Promise 1");
    }, Math.floor(Math.random() * 2 + 1) * 1000);
  });

  // Second promise
  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      arr[1] = Date.now();
      resolve("Promise 2");
    }, Math.floor(Math.random() * 2 + 1) * 1000);
  });

  // Third promise
  const p3 = new Promise((resolve) => {
    setTimeout(() => {
      arr[2] = Date.now();
      resolve("Promise 3");
    }, Math.floor(Math.random() * 2 + 1) * 1000);
  });

  Promise.all([p1, p2, p3]).then((res) => {
    tr.remove(); // Remove loading row

    res.forEach((result, index) => {
      const tr1 = document.createElement("tr");

      const td1 = document.createElement("td");
      td1.textContent = result;

      const td2 = document.createElement("td");
      td2.textContent = ((arr[index] - startTime) / 1000).toFixed(2);

      tr1.appendChild(td1);
      tr1.appendChild(td2);
      tbody.appendChild(tr1);
    });

    // Add total row
    const tr2 = document.createElement("tr");
    const tdTotalLabel = document.createElement("td");
    tdTotalLabel.textContent = "Total";
    tdTotalLabel.colSpan = 1;

    const tdTotalTime = document.createElement("td");
    const lastTime = Date.now();
    tdTotalTime.textContent = ((lastTime - startTime) / 1000).toFixed(2);

    tr2.appendChild(tdTotalLabel);
    tr2.appendChild(tdTotalTime);
    tbody.appendChild(tr2);
  });
});
