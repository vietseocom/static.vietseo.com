
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.top = "50%";
    toast.style.left = "50%";
    toast.style.transform = "translate(-50%, -50%)";
    toast.style.color = "#fff";
    toast.style.padding = "14px 24px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease";
    toast.style.zIndex = 9999;
    toast.style.fontSize = "16px";

    // Màu nền theo loại thông báo
    if (type === "success") {
        toast.style.background = "#4CAF50";
    } else if (type === "error") {
        toast.style.background = "#f44336";
    } else if (type === "warning") {
        toast.style.background = "#ff9800";
    } else {
        toast.style.background = "#2196F3";
    }

    document.body.appendChild(toast);
    setTimeout(() => toast.style.opacity = "1", 10);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}



function copyToClipboard(e) {
    var t = $(e).text().trim();
    if (!t) {
        alert("Kh\xf4ng c\xf3 nội dung để sao ch\xe9p.");
        return;
    }
    var n = $("<input>");
    $("body").append(n), n.val(t).select();
    try {
        document.execCommand("copy") || alert("Kh\xf4ng thể sao ch\xe9p. Vui l\xf2ng thử lại.");
    } catch (r) {
        alert("Lỗi khi sao ch\xe9p: " + r);
    }
    n.remove();
}



function hideshow(e, t, n, r, o, i) {
    var a = new XMLHttpRequest(),
        h = document.getElementById(o);
    if (!h) {
        console.error("Element with ID " + o + " not found.");
        return;
    }
    h.innerHTML = "<img src='https://static.vietseo.com/images/on_off_load.gif'>";
    var c = `${i}hideshow.php?table=${e}&column=${t}&Id=${n}&value=${r}&root=${i}`;
    a.open("GET", c, !0),
        (a.onreadystatechange = function () {
            if (a.readyState === XMLHttpRequest.DONE) {
                if (200 === a.status) {
                    var e = a.responseText;
                    "0" === e ? (h.innerHTML = "Error: Failed to perform action.") : (h.innerHTML = e);
                } else h.innerHTML = "Error: Failed to fetch data.";
            }
        }),
        a.send();
}

function checkFileSize(e) {
    var t = e.value.toLowerCase(),
        n = e.files[0].size,
        r = t.slice(((t.lastIndexOf(".") - 1) >>> 0) + 2);
    n > 2097152 || -1 === [".jpg", ".jpeg", ".png", ".gif", ".pdf", ".webp"].indexOf("." + r)
        ? ((document.getElementById("fileSizeError").textContent = "K\xedch thước tệp qu\xe1 lớn hoặc tệp kh\xf4ng được ph\xe9p, vui l\xf2ng chọn tệp h\xecnh ảnh, PDF hoặc WebP kh\xe1c."), (e.value = ""))
        : (document.getElementById("fileSizeError").textContent = "");
}


function force_checkbox(e, t, n) {
    var r = 0;
    if (e.length > 0) for (var o = t; o < n; o++) 1 == e.elements[o].checked && r++;
    else r = 1;
    return !(r < 1);
}
