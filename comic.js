


function weekend(){choose = 'weekend'; max = 20; chapter = false};



function twokind(){choose = 'twokind'; max = 5; chapter = true};

function twokind1(){choose = 'twokind/ch1'; max = 15; chapter = true};
function twokind2(){choose = 'twokind/ch2'; max = 27; chapter = true};
function twokind3(){choose = 'twokind/ch3'; max = 26; chapter = true};
function twokind4(){choose = 'twokind/ch4'; max = 30; chapter = true};
function twokind5(){choose = 'twokind/ch5'; max = 39; chapter = true};
function twokind6(){choose = 'twokind/ch6-1'; max = 19; chapter = true};
function twokind7(){choose = 'twokind/ch6-2'; max = 34; chapter = true};
function twokind8(){choose = 'twokind/ch7'; max = 51; chapter = true};
function twokind9(){choose = 'twokind/ch8'; max = 39; chapter = true};
function twokind10(){choose = 'twokind/ch9'; max = 61; chapter = true};
function twokind11(){choose = 'twokind/ch10'; max = 97; chapter = true};
function twokind12(){choose = 'twokind/ch11'; max = 86; chapter = true};
function twokind13(){choose = 'twokind/ch12'; max = 66; chapter = true};
function twokind14(){choose = 'twokind/ch13'; max = 18; chapter = true};
function twokind15(){choose = 'twokind/ch14'; max = 18; chapter = true};
function twokind16(){choose = 'twokind/ch15'; max = 18; chapter = true};
function twokind17(){choose = 'twokind/ch16'; max = 18; chapter = true};
function twokind18(){choose = 'twokind/ch17'; max = 18; chapter = true};
function twokind19(){choose = 'twokind/ch18'; max = 18; chapter = true};
function twokind20(){choose = 'twokind/ch19'; max = 18; chapter = true};
function twokind21(){choose = 'twokind/ch20'; max = 18; chapter = true};

function reload(){pagenum = 1;
                  num.innerHTML = pagenum;
                  nummax.innerHTML = max;
                  comic.src = "img/" + choose + "/" + pagenum + ".jpg"; 
                  cover.src = "img/" + choose + "/" + 0 + ".jpg";
                  document.getElementById("numInput").max = max;
                  chapters.style.display = "none";
                  numinput.value = pagenum;
                  booksOpen();
                   
                  };
            