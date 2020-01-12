import "./styles/main.scss";

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}