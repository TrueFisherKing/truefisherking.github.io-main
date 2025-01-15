(function () {
    let locations = [
        "Branford, CT",
        "Derby, CT",
        "Fairfield, CT",
        "Hamden, CT",
        "Milford, CT",
        "North Haven, CT",
        "Orange, CT",
    ];
    let salesPerson = "Fisher";

    let theTitle = document.querySelector("title");
    let controller = document.querySelector("#controller");
    let salesInput = document.querySelector("#salesInput");
    salesInput.focus();
    salesInput.select();
    let cards = document.querySelector(".cards");

    let stateName = "";
    let tftParagraphs = [];
    let salesNames = [];
    let qrImages = [];
    let controlText = locations[0];
    let stateLocation = controlText.substring(controlText.indexOf(",") + 2, controlText.length);
    let imgControlText = controlText.replace(", ", "-").toLowerCase();



   

    let printCards = createElementPlus("button", controller, "print-card", null, "Save Card");
    printCards.addEventListener("click", function () {
        const title = theTitle.innerText;

        document.body.classList.add('print-page');

        html2canvas(cards, { scale: 1 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');

            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('landscape', 'in', 'a4');


            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${title}.pdf`);

            document.body.classList.remove('print-page');
            printCards.blur()
        });

    });
    salesInput.addEventListener('click', () => {
        salesInput.select();
    });

    salesInput.addEventListener("keyup", updateSalesName);
    salesInput.addEventListener("change", updateSalesName);
    selectLocation.addEventListener("change", updateLocation);
    selectLocation.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            printCards.focus();
        }
    });


    function createElementPlus(elementType, appendToElement, theClass, theAttributes, theText) {
        let createdElement = document.createElement(elementType);
        appendToElement.appendChild(createdElement);
        if (theClass) {
            createdElement.classList.add(theClass);
        }
        for (const key in theAttributes) {
            if (Object.hasOwnProperty.call(theAttributes, key)) {
                const attName = theAttributes[key];
                createdElement.setAttribute(key, attName);
            }
        }
        createdElement.innerHTML = theText;
        return createdElement;
    };
    function updateSalesName() {
        salesPerson = salesInput.value;
        salesNames.forEach(function (sn) {
            sn.innerText = salesPerson;
        });
        theTitle.innerText = `TFT Card - ${controlText.replace(",", "")} - ${salesPerson}`;
        
        if (event.key === "Enter") {
            selectLocation.focus();
        }
    };
    function updateLocation() {
        controlText = locations[selectLocation.options.selectedIndex];
        stateLocation = controlText.substring(controlText.indexOf(",") + 2, controlText.length);
        getStateName();
        tftParagraphs.forEach(function (tftP) {
            tftP.innerHTML = `Town Fair Tire Centers <br>of ${stateName} LLC <br>${controlText}`;
        });
        imgControlText = controlText.replace(", ", "-").toLowerCase();
        qrImages.forEach(function (qrImg) {
            qrImg.setAttribute("src", `images/qr-codes/${imgControlText}.png`);
        });

        theTitle.innerText = `TFT Card - ${controlText.replace(",", "")} - ${salesPerson}`;
    };
    function getStateName() {
        switch (stateLocation) {
            case "CT":
                stateName = "Connecticut";
                break;
            case "NH":
                stateName = "New Hampshire";
                break;
            case "NY":
                stateName = "New York";
                break;
            case "ME":
                stateName = "Maine";
                break;
            case "MA":
                stateName = "Massachusetts";
                break;
            case "RI":
                stateName = "Rhode Island";
                break;
            case "VT":
                stateName = "Vermont";
                break;
            default:
                break;
        }
    };
})()