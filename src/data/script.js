export function getStateName(stateLocation) {
    let stateName = ""
    switch (stateLocation) {
        case "CT":
            return "Connecticut";
            break;
        case "NH":
            return "New Hampshire";
            break;
        case "NY":
            return "New York";
            break;
        case "ME":
            return "Maine";
            break;
        case "MA":
            return "Massachusetts";
            break;
        case "RI":
            return "Rhode Island";
            break;
        case "VT":
            return "Vermont";
            break;
        default:
            break;
    }
}

export default function printCards() {
    document.body.classList.add('print-page');
    const cards = document.querySelector('.cards');
    html2canvas(cards, { scale: 1 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('landscape', 'in', 'a4');


        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        
        pdf.save(`${document.title}.pdf`);

        document.body.classList.remove('print-page');
    });
}