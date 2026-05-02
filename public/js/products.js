const brandSelect = document.getElementById("brand_select")
const brandCode = document.getElementById("brand_code")
const modelSelect = document.getElementById("model_select")
const modelCode = document.getElementById("model_code")


async function getMarcas() {
    try {
        const query = await fetch("/brands/get-brands")
        const json = await query.json()
        return json.data
    } catch (err) {
        console.error(err)
        return []
    }
}

async function getModel(id) {
    try {
        const query = await fetch(`/models/get-model/${id}`)
        const json = await query.json()
        return json.data
    } catch (err) {
        console.error(err)
        return []
    }
}


function maskCode(code, length = 2) {
    let maskCode = String(code)
    for (let i = 0; i < length; i++) {
        if (maskCode.length <= i) {
            maskCode = maskCode.padStart(i + 1, "0")
        }
    }
    return maskCode
}

function setSelectOption(data) {
    const fragment = document.createDocumentFragment()
    data.forEach(data => {
        const option = document.createElement("option")
        option.value = data.id
        option.textContent = data.name
        fragment.appendChild(option)
    })
    return fragment
}

brandSelect.addEventListener("change", async e => {
    brandCode.value = `M-${maskCode(e.target.value)}`

    const models = await getModel(e.target.value)
    modelSelect.innerHTML = "<option>---</option>"
    modelSelect.appendChild(setSelectOption(models))

})

modelSelect.addEventListener("change", async e => {
    modelCode.value = `MOD-${maskCode(e.target.value)}`
})

document.addEventListener("DOMContentLoaded", async (e) => {
    const marcas = await getMarcas()
    brandSelect.appendChild(setSelectOption(marcas))

})