export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaData(dataNascimento)) {
        campo.setCustomValidity('O Usuário não é maior de idade.');
    }
}

function validaData(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getMonth(), data.getUTCDate());
    return dataAtual >= dataMais18;
}