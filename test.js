function sandBox(arr){
    let obj = {}
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        }else obj[arr[i]]++;
    }
    for(let key in obj){
        if(obj[key] >= 2){
            let a = obj[key]/2 
            a= Math.floor(a)
            temp = temp + a
        }
    }
    return temp;
}
console.log("====================N0.1====================");
console.log(sandBox([10,20,20,10,10,30,50,10,20]));
console.log(sandBox([6,5,2,3,5,2,2,1,1,5,1,3,3,3,5]));
console.log(sandBox( [1,1,3,1,2,1,3,3,3,3]));

function sandBox_2(kalimat){
    let newKalimat = kalimat.split(" ")
    let abjat = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z', '-', '?'
      ]
    let temp = 0
    for (let i = 0; i < newKalimat.length; i++) {
        let kata = newKalimat[i].toLowerCase();
        let flag = true
        for (let y = 0; y < kata.length; y++) {
            if(abjat.includes(kata[y])){
            }else {
                flag = false;
            }
        }
        if(flag){
            temp++
        }
    }
    return temp
}
console.log("====================N0.2====================");
console.log(sandBox_2("Saat meng*ecat tembok, Agung dib_antu oleh Raihan"));
console.log(sandBox_2("Berapa u(mur minimal[ untuk !mengurus ktp?"));
console.log(sandBox_2("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda"));