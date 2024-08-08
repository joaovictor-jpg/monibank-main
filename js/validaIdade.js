export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaData(dataNascimento);
    console.log(validaData(dataNascimento));
}

function validaData(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getMonth(), data.getUTCDate());
    return dataAtual >= dataMais18;
}