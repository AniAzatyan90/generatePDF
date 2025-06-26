import React, { useState } from "react";
import { jsPDF } from "jspdf";

const PdfGenerator = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [template, setTemplate] = useState("1");

  const generateText = () => {
    switch (template) {
      case "1":
        return `Es ${name} ${lastName} aprum em Erevan qaxaqum.`;
      case "2":
        return `Im anun e ${name}, azganun ${lastName}, yes ashxatum em IT sektorum.`;
      case "3":
        return `${name} ${lastName} – student/ka Reacti dasaranic.`;
      default:
        return "";
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(generateText(), 10, 10);
    doc.save("template.pdf");
  };

  return (
    <div class='w-13'>
      <div class='p-5 border-spacing-3 bg-slate-600 w-[250px]' >
        <h2>PDF Generator</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", margin: "10px 0" }}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        // style={{ display: "block", margin: "10px 0" }}
        class='display block margin-10px'
        />

        <select class=''
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        // style={{ display: "block", margin: "10px 0" }}
        >
          <option value="1">🏠 Բնակության հասցե</option>
          <option value="2">💼 ԻՏ մասնագետ</option>
          <option value="3">🎓Դասախոս </option>
        </select>

        <button onClick={generatePDF}>Գեներացիա</button>
      </div>
    </div>
  );
};

export default PdfGenerator;
