document.getElementById("addTreatment").addEventListener("click", () => {
    const container = document.getElementById("treatmentContainer");
    const treatmentInput = document.createElement("input");
    treatmentInput.type = "text";
    treatmentInput.placeholder = "Treatment";
    treatmentInput.className = "form-control treatment mb-2 col-md-6";
    
    const costInput = document.createElement("input");
    costInput.type = "number";
    costInput.placeholder = "Cost ($)";
    costInput.className = "form-control cost mb-2 col-md-4";
    
    container.appendChild(treatmentInput);
    container.appendChild(costInput);
});

document.getElementById("patientForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    
    const treatments = Array.from(document.getElementsByClassName("treatment")).map((input, index) => ({
        name: input.value,
        cost: parseFloat(document.getElementsByClassName("cost")[index].value) || 0
    }));
    
    const totalCost = treatments.reduce((sum, treatment) => sum + treatment.cost, 0);
    
    const tableBody = document.getElementById("patientRecords").getElementsByTagName("tbody")[0];
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = firstName;
    row.insertCell(1).textContent = lastName;
    row.insertCell(2).textContent = dob;
    row.insertCell(3).textContent = treatments.map(t => `${t.name} ($${t.cost.toFixed(2)})`).join(", ");
    row.insertCell(4).textContent = `$${totalCost.toFixed(2)}`;
    
    document.getElementById("patientForm").reset();
    document.getElementById("treatmentContainer").innerHTML = '';
});
