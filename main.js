window.addEventListener("load", init);

function init() {
  //console.log("hahó");
  /**Változók deklarárása létrehozása */
  /**Változók inicializálása */
  /**Gyengén típusos nyelv */
  var valtozo1 = "kettő";
  let valtozo2 = 2.5;
  const VALT3 = 2; /**A futásidőben nem változtathatjuk meg az értékét */
  //valtozo3 = 4 -> hiba mert constansnak nem adhatok értéket
  console.log("valt1", valtozo1, typeof valtozo1);
  //console.log(parseInt(valtozo1) ,typeof valtozo1);
  console.log("valt2", valtozo2, typeof valtozo2);
  //console.log(parseInt(valtozo2) ,typeof valtozo2);
  console.log("valt3", VALT3, typeof VALT3);
  //console.log(parseInt(valtozo3) ,typeof valtozo3);

  let logikai = 3 > 1;
  console.log("logikai", logikai, typeof logikai);

  /**Műveletek */
  let eredmeny =
    valtozo1 -
    valtozo2; /**két különböző típus esetén elvégzi azt a műveletet amit akar. */
  /**Nincs hibaüzenet szövegként egymás után fűzi.*/
  console.log("Az eredmeny :", eredmeny);
  elagazasok();
  ciklusok()
}

function elagazasok() {
  console.log("**********Elágazások**********");
  var szam = 19;
  /**HA a szám változonk osztható kettővell
   * akkor írjuk ki hogy páros különben páralan. */
  if (szam % 2 == 0) {
    console.log("a", szam, "páros");
  } else {
    console.log("a", szam, "páratlan");
  }
  /**Ha a szám osztható 2 vel és 3 mal is akkor 2vel és 3mal is különben */
  if (szam % 2 == 0 && szam % 3 == 0) {
    console.log("a", szam, "oszható 2 vel és 3 mal is");
  } else if (szam % 2 == 0) {
    console.log("a", szam, "oszható 2 vel");
  } else if (szam % 3 == 0) {
    console.log("a", szam, "oszható 3 mal");
  } else {
    console.log("Egyikkel sem osztható");
  }
  /**Switch case */
  /**A hét napjai */
  /**Aott egy nap változó */
  /**Generáljunk véletlen számot 1- 7 között zárt intervallum [1, 7]*/
    /**Random */
  var nap = parseInt(Math.random() * 7 + 1);
  /**[0, 1[
   * [0, 2[
   * [1, 7[ 2,34, 1,9998
   */
  switch (nap) {
    default:
      console.log("Ez nem a hét egyik napja");
      break;
    case 1:
      console.log("Hétfő");
      break;
    case 2:
      console.log("Kedd");
      break;
    case 3:
      console.log("Szerda");
      break;
    case 4:
      console.log("Csütörtök");
      break;
    case 5:
      console.log("Péntek");
      break;
    case 6:
      console.log("Szombat");
      break;
    case 7:
      console.log("Vasárnap");
      break;
  }
  
}
function ciklusok(){
    console.log("***********Ciklusok***********")
    /**Elöltesztelős cíklus
     * Hátultesztelős ciklus
     * számlálós ciklus
     */

    /**Írjunk ki a konzolra 10  véletlen számot
     * 100-500
    */
    for (let index = 0; index < 10; index++) {
        var vszam = parseInt(Math.random()* 401) + 100
        console.log(vszam)        
    }
    /**Generáljunk véletlen számokat 
     * -20 és 10 között zárt intervallumban 
     * Addig generáljukl amíg pozitív számot nem kapunk*/
    console.log("Hátultesztelős ciklius")
    do{
        var vszam = parseInt(Math.random()* 31) - 20;
        console.log(vszam)
    }while (vszam <= 0) {       
    }

    /**Ha nem akarom hogy kiírja a pozitív számot
     *akkor érdemes elől tesztelős ciklust használni */
    console.log("Elől tesztelős ciklus")
    var vszam = parseInt(Math.random()* 31) - 20;
    while (vszam <= 0) {
        console.log(vszam)
        vszam = parseInt(Math.random()* 31) - 20;
        
    }

}
