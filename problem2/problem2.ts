//Problem 2 - Cetak Table Perkalian
//Buat program yang memunculkan output seperti contoh dibawah. Input merupakan n bilangan 1 sampai 30. Output merupakan
//table perkalian seperti yang di deskripisikan.

//*untuk outputnya tidak harus sama persis, cobalah untuk dibuat semirip mungkin dengan sample output.

const cetakTabelPerkalian = (number: number) => {
  let table = [] as number[][];
  for (let i = 0; i < number; i++) {
    table[i] = [];
    for (let j = 0; j < number; j++) {
      table[i][j] = (i + 1) * (j + 1);
    }
  }
  for (let i = 0; i < number; i++) {
    let row = "";
    for (let j = 0; j < number; j++) {
      let numStr = table[i][j].toString().padStart(2, " ");
      row += numStr + " ";
    }
    console.log(row);
  }
};
cetakTabelPerkalian(9);
