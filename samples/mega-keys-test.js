const main = ((a, e, r) => {
  var c = 2;
  while (true) {
    switch (c) {
      case 2:
        return {
          s80PVdz: ((a, e, r) => {
            var c;
            var n;
            var s;
            var $;
            var b;
            var t;
            for (var k = 2; k !== 32;) {
              switch (k) {
                case 27:
                  $ = s;
                  U = (s = r[n]) - $;
                  n++;
                  k = 23;
                  break;
                case 17:
                  s = n = 0;
                  k = 15;
                  break;
                case 18:
                  k = c >= 0 ? 17 : 34;
                  break;
                case 7:
                  var U;
                  var k = 14;
                  break;
                case 22:
                  G[t][$ + (c - $ + e * t) % U] = G[c];
                  k = 35;
                  break;
                case 23:
                  k = s <= c ? 27 : 22;
                  break;
                case 19:
                  c = a - 1;
                  k = 18;
                  break;
                case 4:
                  k = 7;
                  break;
                case 11:
                  b += 1;
                  k = 13;
                  break;
                case 10:
                  t = 0;
                  k = 20;
                  break;
                case 1:
                  k = 4;
                  break;
                case 33:
                  return G;
                  break;
                case 13:
                  k = b < a ? 12 : 10;
                  break;
                case 2:
                  var G = [];
                  k = 1;
                  break;
                case 34:
                  t += 1;
                  k = 20;
                  break;
                case 35:
                  --c;
                  k = 18;
                  break;
                case 20:
                  k = t < a ? 19 : 33;
                  break;
                case 15:
                  $ = s;
                  k = 27;
                  break;
                case 14:
                  b = 0;
                  k = 13;
                  break;
                case 12:
                  G[b] = [];
                  k = 11;
                  break;
              }
            }
          })(a, e, r)
        };
        break;
    }
  }
})(66, 18, [66]).s80PVdz;
const arr1 = main;
const arr2 = main;
function f(a) {
  for (var e = 0; e !== 2;) {
    switch (e) {
      case 0:
        var r = [arguments];
        r[4] = r[0][0];
        r[0][0] = 4 - r[0][0].length % 4;
        if (r[0][0] < 4) {
          r[4] += "=".repeat(r[0][0]);
        }
        e = 1;
        break;
      case 1:
        r[4] = r[4].replace(/\055/g, "+").replace(/\137/g, "/");
        return atob(r[4]);
    }
  }
}
function h(a) {
  return a.split("").map(function (b) {
    return b.charCodeAt(0);
  });
}
function E() {
  return "0WNT100W64641390G20100101F1390"; //UA slice.
}
function v(a) {
  return String.fromCharCode.apply(null, a);
}
function c(a, e) {
  for (var r = arr1[38][33][16]; r !== arr2[27][39][1];) {
    switch (r) {
      case arr2[30][5][11]:
        c[5] = (c[5] + c[4][c[6] = (c[6] + 1) % 256]) % 256;
        c[7] = c[4][c[6]];
        c[4][c[6]] = c[4][c[5]];
        r = arr2[57][49][48];
        break;
      case arr2[40][37][26]:
        c[6]++;
        r = arr1[62][38][32];
        break;
      case arr1[6][46][41][34]:
        r = c[2] < c[0][1].length ? arr1[27][23][53] : arr2[43][50][4];
        break;
      case arr2[54][23][48]:
        c[6] = 0;
        r = arr1[65][29][19];
        break;
      case arr1[14][4][56]:
        r = c[6] < 256 ? arr2[44][44][22] : arr2[6][26][36];
        break;
      case arr2[25][53][60]:
        c[4][c[5]] = c[7];
        c[8] += String.fromCharCode(c[0][1].charCodeAt(c[2]) ^ c[4][(c[4][c[6]] + c[4][c[5]]) % 256]);
        r = arr1[5][59][23];
        break;
      case arr1[41][41][54]:
        c[2] = c[5] = c[6] = 0;
        r = arr2[18][2][10];
        break;
      case arr2[33][55][52]:
        var c = [arguments];
        c[4] = [];
        c[5] = 0;
        c[6] = 0;
        c[8] = "";
        r = arr2[44][62][30];
        break;
      case arr1[26][6][22]:
        c[5] = (c[5] + c[4][c[6]] + c[0][0].charCodeAt(c[6] % c[0][0].length)) % 256;
        c[7] = c[4][c[6]];
        c[4][c[6]] = c[4][c[5]];
        c[4][c[5]] = c[7];
        r = arr1[61][25][2];
        break;
      case arr1[30][24][21]:
        c[4][c[6]] = c[6];
        r = arr2[56][6][3][22];
        break;
      case arr1[22][65][13]:
        r = c[6] < 256 ? arr2[11][5][4][39] : arr2[48][61][11];
        break;
      case arr1[27][39][46]:
        c[6]++;
        r = arr1[43][21][7];
        break;
      case arr1[12][9][47]:
        c[6] = 0;
        r = arr2[16][28][38];
        break;
      case arr1[63][18][29]:
        c[2]++;
        r = arr2[43][4][64];
        break;
      case arr1[59][31][22]:
        return c[8];
        break;
    }
  }
}
function V() {
  return true;
}
function N(a) {
  return (a - 82 + 256) % 256;
}
function x3(a) {
  return (a << 6 | a >>> 2) & 255;
}
function t(a) {
  return (a >>> 1 | a << 7) & 255;
}
function o(a) {
  return (a << 1 | a >>> 7) & 255;
}
function s(a) {
  return (a >>> 4 | a << 4) & 255;
}
function $(a) {
  return (a - 8 + 256) % 256;
}
function i(a) {
  return (a << 5 | a >>> 3) & 255;
}
function U3(a) {
  return (a - 194 + 256) % 256;
}
function p(a) {
  return (a - 162 + 256) % 256;
}
function d(a) {
  return (a << 2 | a >>> 6) & 255;
}
function B(a) {
  return (a + 92) % 256;
}
function I(a) {
  return (a + 20) % 256;
}
// 1-P1
function u3() {
  for (var a = arr1[40][22][28]; a !== arr1[57][49][47];) {
    switch (a) {
      case arr2[57][10][20]:
        try {
          for (var e = arr1[48][64][40]; e !== arr1[51][19][29];) {
            switch (e) {
              case arr1[53][28][56]:
                r[6][r[3]] = r[1].charCodeAt(r[3] % r[1].length);
                e = arr2[33][36][11][6];
                break;
              case arr1[25][15][56]:
                e = r[3] < r[6].length ? arr2[31][10][58] : arr2[23][64][11];
                break;
              case arr2[44][26][17]:
                r[3] = 0;
                e = arr1[2][62][38];
                break;
              case arr1[52][40][55][53]:
                e = r[3] < r[6].length ? arr2[20][27][38] : arr2[33][11][36];
                break;
              case arr1[7][18][24]:
                r[3] += 4;
                e = arr1[22][54][65];
                break;
              case arr1[20][65][55][34]:
                r[6][r[3]] = r[4].charCodeAt(r[3] % r[4].length);
                e = arr2[41][11][63];
                break;
              case arr2[58][9]:
                r[3] = 0;
                e = arr1[10][63][23];
                break;
              case arr2[54][48][36]:
                r[4] = cookie; // COOKIE IMP
                e = arr1[5][38][65];
                break;
              case arr2[29][8][40]:
                r[1] = E();
                e = arr2[16][65][33];
                break;
              case arr2[47][5][57]:
                r[3] += 6;
                e = arr1[26][16][14];
                break;
            }
          }
        } catch (a) {}
        a = arr2[3][14][59][18];
        break;
      case arr1[47][3][58]:
        var r = [arguments];
        r[6] = h(atob(keys.key1)); //const:B3.I2c(143)
        a = arr1[22][28][59];
        break;
      case arr2[41][8][25]:
        a = r[3] < r[6].length - 5 ? arr2[49][16][57] : arr2[16][27][42];
        break;
      case arr1[0][6][59]:
        a = true ? arr1[62][43][50] : arr1[51][13][48];
        break;
      case arr1[38][31][30]:
        r[3] = 0;
        a = arr2[43][8][37];
        break;
      case arr2[61][1][28]:
        r[3] += 3;
        a = arr2[57][20][7];
        break;
      case arr2[18][1][48]:
        return r[6];
        break;
      case arr1[53][23][9]:
        r[6][r[3]] = r[6][r[3] + 2];
        a = arr1[6][62][4];
        break;
    }
  }
}
function n3(a) {
  for (var e = arr1[26][32][58]; e !== arr2[20][61][32];) {
    switch (e) {
      case arr2[60][42][36][5]:
        e = c === 1 ? arr2[63][17][21] : arr1[43][2][8];
        break;
      case arr1[13][52][10]:
        var r = [arguments];
        r[3] = u3();
        r[2] = 0;
        r[1] = 0;
        e = arr1[63][33][36];
        break;
      case arr2[31][3][60]:
        r[8] = i(r[8]);
        e = arr2[13][58][32];
        break;
      case arr1[20][57][2]:
        e = c === 2 ? arr1[19][42][6] : arr1[42][2][22];
        break;
      case arr1[58][43][25]:
        e = c === 8 ? arr2[31][24][4] : arr1[41][46][45];
        break;
      case arr1[7][36][35]:
        r[8] = U3(r[8]);
        e = arr2[30][20][44];
        break;
      case arr1[38][4][2]:
        // creates the r[9] array fn-1
        r[8] ^= r[3][r[2] % 32];
        r[9].push(r[8] & 255);
        e = arr2[62][27][15];
        break;
      case arr2[53][5][65]:
        e = c === 6 ? arr2[64][22][22] : arr2[56][58][55];
        break;
      case arr1[64][26][48]:
        r[9] = [];
        e = arr1[50][56][24];
        break;
      case arr2[15][28][11]:
        r[8] = p(r[8]);
        e = arr1[1][33][58][44];
        break;
      case arr2[31][39][36]:
        r[8] = d(r[8]);
        e = arr1[33][1][50];
        break;
      case arr2[32][34][39]:
        e = c === 9 ? arr2[24][55][30] : arr1[6][42][32];
        break;
      case arr2[19][42][33][43]:
        e = c === 7 ? arr2[44][5][24] : arr2[33][36][13];
        break;
      case arr2[63][37][1]:
        r[8] = i(r[8]);
        e = arr1[35][9][8];
        break;
      case arr2[58][61][60]:
        r[8] = d(r[8]);
        e = arr2[9][57][56];
        break;
      case arr1[33][65][18]:
        e = r[0][0].length ? arr2[51][48][13] : arr2[61][58][0];
        break;
      case arr1[31][1][48]:
        return r[9]; // out
        break;
      case arr2[12][16][61]:
        if (r[1]++ < 5) {
          r[0][0].shift();
        }
        r[8] = r[0][0].shift();
        e = arr2[56][0][46];
        break;
      case arr1[18][46][27]:
        r[2]++;
        e = arr2[15][48][0];
        break;
      case arr2[22][60][12][22]:
        var c = r[2] % 10;
        var e = c === 0 ? arr2[38][60][18][23] : arr2[21][22][35];
        break;
      case arr2[31][5][19]:
        e = c === 4 ? arr1[40][45][7] : arr1[57][14][12];
        break;
      case arr2[10][15][47][34]:
        r[8] = B(r[8]);
        e = arr2[24][42][8];
        break;
      case arr2[48][42][52]:
        e = c === 3 ? arr1[32][6][30][29] : arr2[17][13][13];
        break;
      case arr1[28][18][27]:
        r[8] = i(r[8]);
        e = arr1[55][43][14];
        break;
      case arr1[15][44][18]:
        r[8] = I(r[8]);
        e = arr1[52][7][8];
        break;
      case arr2[55][39][54]:
        e = c === 5 ? arr1[29][47][36] : arr2[9][64][5];
        break;
      case arr2[0][22][34]:
        r[8] = I(r[8]);
        e = arr1[59][11][56];
        break;
    }
  }
}
// 1-P2
function G3() {
  return atob(keys.key2); // const:B3.W3x(346)
}
function x(a) {
  return h(c(G3(), v(a)));
}
function W3(a) {
  return x(a);
}

// 2-P1
function b3() {
  for (var a = arr2[0][47][40]; a !== arr2[1][1][35];) {
    switch (a) {
      case arr1[35][61][5]:
        a = V() ? arr1[51][28][44] : arr1[3][16][12];
        break;
      case arr1[20][23][9]:
        e[1][e[5]] = e[1][e[5] + 2];
        a = arr1[34][57][16];
        break;
      case arr1[16][44][16]:
        var e = [arguments];
        e[1] = h(atob(keys.key3)); // const:B3.I2c(505)
        a = arr1[10][16][35];
        break;
      case arr1[3][55][54]:
        e[5] = 0;
        a = arr1[10][55][25];
        break;
      case arr1[18][21][50]:
        try {
          for (var r = arr1[41][21][16]; r !== arr2[50][64][41];) {
            switch (r) {
              case arr1[10][12][64]:
                e[6] = E();
                r = arr1[21][3];
                break;
              case arr2[8][22][4]:
                e[1][e[5]] = e[4].charCodeAt(e[5] % e[4].length);
                r = arr2[38][50][32][21];
                break;
              case arr1[62][12][20]:
                e[1][e[5]] = e[6].charCodeAt(e[5] % e[6].length);
                r = arr2[58][16][6][0];
                break;
              case arr1[63][57][54]:
                e[3] = [`1619=${cookie}`, cookie];
                r = arr2[32][63][46];
                break;
              case arr1[34][17][63]:
                e[5] += 6;
                r = arr1[62][6][50];
                break;
              case arr2[18][15]:
                e[5] = 0;
                r = arr2[49][47][35];
                break;
              case arr2[65][48][17]:
                r = e[5] < e[1].length ? arr2[13][40][32] : arr1[54][4][36];
                break;
              case arr1[26][31][42]:
                e[5] += 4;
                r = arr1[16][14][35];
                break;
              case arr2[64][3][16][34]:
                e[4] = e[3] ? e[3][1] : B3.W3x(68) === e[9] ? e[6] : S;
                r = arr1[38][12][59];
                break;
              case arr1[42][59][5]:
                e[5] = 0;
                r = arr1[8][2][50];
                break;
              case arr2[53][26][26]:
                r = e[5] < e[1].length ? arr1[53][1][28] : arr1[17][14][38][29];
                break;
            }
          }
        } catch (a) {}
        a = arr2[54][30][60];
        break;
      case arr1[14][12][24]:
        return e[1];
        break;
      case arr1[29][27][40]:
        e[5] += 3;
        a = arr2[10][48][31];
        break;
      case arr2[23][8][49]:
        a = e[5] < e[1].length - 5 ? arr2[13][4][21] : arr2[32][34][0];
        break;
    }
  }
}
function Z(a) {
  for (var e = arr1[51][49][52]; e !== arr2[24][48][20];) {
    switch (e) {
      case arr1[18][24][43]:
        if (r[5]++ < 5) {
          r[0][0].shift();
        }
        r[4] = r[0][0].shift();
        e = arr2[24][33][52];
        break;
      case arr2[42][37][30]:
        e = r[0][0].length ? arr2[10][54][7] : arr1[28][18][6];
        break;
      case arr1[17][18][25]:
        e = c === 7 ? arr1[4][28][0] : arr2[11][43][7];
        break;
      case arr2[16][54][56]:
        e = c === 2 ? arr2[53][48][54] : arr2[18][57][10];
        break;
      case arr1[32][29][59]:
        r[4] = s(r[4]);
        e = arr1[18][18][2];
        break;
      case arr1[37][26][10]:
        r[4] = d(r[4]);
        e = arr1[60][63][8];
        break;
      case arr1[53][33][20]:
        r[4] ^= r[2][r[9] % 32];
        r[3].push(r[4] & 255);
        e = arr1[32][43][57];
        break;
      case arr2[9][45][31]:
        e = c === 8 ? arr1[20][0][34] : arr2[62][13][39];
        break;
      case arr2[49][22][18]:
        r[3] = [];
        e = arr1[15][51][54];
        break;
      case arr1[30][2][5]:
        e = c === 6 ? arr2[47][46][14][40] : arr1[56][55][1];
        break;
      case arr1[57][35][49][24]:
        r[4] = $(r[4]);
        e = arr2[62][52][20];
        break;
      case arr1[8][51][57]:
        r[9]++;
        e = arr1[39][47][60];
        break;
      case arr2[41][38][13]:
        e = c === 4 ? arr2[13][64][55] : arr1[13][41][36];
        break;
      case arr2[22][10][23]:
        e = c === 1 ? arr1[1][18][63] : arr2[57][64][20];
        break;
      case arr1[5][31][46]:
        var r = [arguments];
        r[2] = b3();
        r[9] = 0;
        r[5] = 0;
        e = arr1[27][10][0];
        break;
      case arr2[3][7][30]:
        r[4] = p(r[4]);
        e = arr1[43][23][44];
        break;
      case arr1[42][61][28]:
        e = c === 3 ? arr2[52][45][60][29] : arr2[51][62][43];
        break;
      case arr1[33][1][30]:
        e = c === 5 ? arr2[58][41][23][12] : arr1[50][59][29];
        break;
      case arr2[11][3][22]:
        r[4] = B(r[4]);
        e = arr1[19][37][20];
        break;
      case arr2[45][61][24]:
        return r[3];
        break;
      case arr1[63][12][0]:
        r[4] = s(r[4]);
        e = arr2[25][40][44];
        break;
      case arr1[5][12][61]:
        r[4] = o(r[4]);
        e = arr1[55][62][26];
        break;
      case arr2[6][23][56][30]:
        r[4] = t(r[4]);
        e = arr1[11][36][20];
        break;
      case arr2[59][35][57]:
        r[4] = o(r[4]);
        e = arr2[10][10][56][20];
        break;
      case arr2[65][59][40]:
        var c = r[9] % 10;
        var e = c === 0 ? arr1[32][30][17] : arr1[33][8][53];
        break;
      case arr2[25][4][35]:
        r[4] = B(r[4]);
        e = arr1[17][20][32];
        break;
      case arr2[50][35][33]:
        e = c === 9 ? arr2[60][12][0] : arr1[53][2][56];
        break;
    }
  }
}

// Z fn -reset fn
function T() {
  return atob(keys.key4); // const:B3.I2c(224)
}
function t3(a) {
  return h(c(T(), v(a)));
}
function j(a) {
  return t3(a);
}

// 3-P1
function w() {
  for (var a = arr1[14][63][16]; a !== arr2[57][48][29];) {
    switch (a) {
      case arr1[20][55][28]:
        r[4] += 3;
        a = arr1[15][41][56][61];
        break;
      case arr2[51][24][48]:
        r[4] = 0;
        a = arr1[45][50][13];
        break;
      case arr1[32][13][61]:
        a = r[4] < r[2].length - 5 ? arr1[1][25][63] : arr1[24][51][60];
        break;
      case arr2[60][44][18]:
        return r[2];
        break;
      case arr2[20][8][29][20]:
        try {
          for (var e = arr1[42][4][19][40]; e !== arr2[19][46][59];) {
            switch (e) {
              case arr1[51][37][34]:
                r[7] = E();
                // userAgent.replace(regex,"").slice(-30)
                e = arr2[54][3];
                break;
              case arr1[23][25][32][60]:
                r[6] = cookie; // or "fuck you"
                e = arr1[38][24][11];
                break;
              case arr2[14][39][9]:
                r[4] += 6;
                e = arr2[60][8][8];
                break;
              case arr2[63][11][8]:
                r[2][r[4]] = r[7].charCodeAt(r[4] % r[7].length);
                e = arr1[37][9][42];
                break;
              case arr2[41][61][56]:
                e = r[4] < r[2].length ? arr1[6][50][34] : arr2[3][4][65];
                break;
              case arr1[31][25][53]:
                r[4] = 0;
                e = arr2[38][47][50];
                break;
              case arr2[20][37][48]:
                r[4] += 4;
                e = arr2[4][54][23];
                break;
              case arr1[33][21]:
                r[4] = 0;
                e = arr2[5][48][53];
                break;
              case arr1[21][23][29]:
                e = r[4] < r[2].length ? arr1[7][42][32] : arr2[33][64][0];
                break;
              case arr2[2][34][52]:
                r[2][r[4]] = r[6].charCodeAt(r[4] % r[6].length);
                e = arr1[48][65][2][9];
                break;
            }
          }
        } catch (a) {}
        a = arr1[42][55][42];
        break;
      case arr1[23][42][39]:
        r[2][r[4]] = r[2][r[4] + 2];
        a = arr2[12][0][46];
        break;
      case arr1[46][43][32][41]:
        a = V() ? arr1[4][47][38] : arr1[38][30][12];
        break;
      case arr1[25][62][64]:
        var r = [arguments];
        r[2] = h(atob(keys.key5)); // const:B3.W3x(194)
        a = arr1[55][56][35];
        break;
    }
  }
}
function r3(a) {
  var e = arr2[33][44][52];
  while (e !== arr2[38][48][38]) {
    switch (e) {
      case arr1[51][0][48]:
        c[1] = I(c[1]);
        e = arr2[32][60][30][50];
        break;
      case arr2[49][25][52]:
        c[1] = N(c[1]);
        e = arr2[6][56][20];
        break;
      case arr2[11][17][49]:
        e = r === 4 ? arr1[10][5][31] : arr2[30][34][12];
        break;
      case arr2[59][17][42]:
        return c[5];
        break;
      case arr1[65][9][21]:
        c[1] = t(c[1]);
        e = arr2[61][59][8];
        break;
      case arr1[12][47][21]:
        e = r === 9 ? arr2[50][11][54] : arr2[6][63][14];
        break;
      case arr1[22][50][17]:
        e = r === 1 ? arr2[12][63][15][9] : arr1[26][11][2];
        break;
      case arr1[65][62][52]:
        e = r === 3 ? arr2[35][10][65] : arr2[56][9][43];
        break;
      case arr1[23][51][46][39]:
        c[1] = c[0][0].shift();
        e = arr1[15][59][4];
        break;
      case arr1[60][25][50]:
        c[1] ^= c[8][c[4] % 32];
        c[5].push(c[1] & 255);
        e = arr2[60][15][51];
        break;
      case arr2[31][33][0]:
        e = r === 5 ? arr2[54][53][30] : arr1[28][64][53];
        break;
      case arr1[59][33][55]:
        if (c[9]++ < 9) {
          c[0][0].shift();
        }
        e = arr2[11][32][51];
        break;
      case arr1[26][54][19]:
        c[1] = i(c[1]);
        e = arr2[27][41][8];
        break;
      case arr1[13][7][31]:
        e = r === 8 ? arr2[1][27][10] : arr1[25][49][3];
        break;
      case arr2[56][36][65]:
        c[1] = p(c[1]);
        e = arr2[0][19][44];
        break;
      case arr2[29][43][60]:
        e = c[0][0].length ? arr2[55][19][43] : arr2[23][19][60];
        break;
      case arr2[44][9][41]:
        c[1] = $(c[1]);
        e = arr1[34][39][14];
        break;
      case arr2[12][62][40]:
        var r = c[4] % 10;
        var e = r === 0 ? arr1[29][44][53] : arr1[3][64][23];
        break;
      case arr2[23][56][39]:
        c[4]++;
        e = arr1[11][33][36];
        break;
      case arr1[29][16][61]:
        e = r === 7 ? arr1[11][40][60] : arr1[28][43][43];
        break;
      case arr2[3][34][24]:
        c[5] = [];
        e = arr1[3][44][54];
        break;
      case arr2[14][42][0]:
        c[1] = I(c[1]);
        e = arr1[48][35][26];
        break;
      case arr2[61][30][42]:
        c[1] = o(c[1]);
        e = arr1[15][60][14];
        break;
      case arr1[28][63][17][22]:
        var c = [arguments];
        c[8] = w(); // helper-fn
        c[4] = 0;
        c[9] = 0;
        e = arr1[31][58][30];
        break;
      case arr1[9][57][4]:
        c[1] = s(c[1]);
        e = arr2[12][62][64][62];
        break;
      case arr2[4][31][41]:
        e = r === 6 ? arr1[30][31][46] : arr1[46][60][31];
        break;
      case arr2[13][14][44]:
        e = r === 2 ? arr1[5][21][6] : arr2[4][14][10];
        break;
      case arr2[2][51][6]:
        c[1] = t(c[1]);
        e = arr2[51][36][62];
        break;
    }
  }
}
// 3-P2
function u(a) {
  return h(c(_(), v(a)));
}
function a3(a) {
  return u(a);
}
function _() {
  return atob(keys.key6); // const:B3.I2c(96)
}

// 4-P1 
function h3() {
  var a = arr2[40][14][16];
  while (a !== arr1[46][32][5]) {
    switch (a) {
      case arr1[2][15][6]:
        return e[8];
        break;
      case arr1[24][58][3]:
        e[8][e[4]] = e[8][e[4] + 2];
        a = arr2[36][15][64];
        break;
      case arr1[5][22][16]:
        var e = [arguments];
        e[8] = h(atob(keys.key7)); // const:B3.W3x(179)
        a = arr1[42][4][11];
        break;
      case arr2[15][58][29]:
        a = V() ? arr1[51][62][62] : arr2[63][22][18];
        break;
      case arr1[39][46][32]:
        try {
          for (var r = arr2[45][51][19][64]; r !== arr2[11][25][29];) {
            switch (r) {
              case arr2[38][43][64]:
                e[2] = E();
                r = arr2[59][27];
                break;
              case arr2[21][37][22]:
                e[8][e[4]] = e[1].charCodeAt(e[4] % e[1].length);
                r = arr1[8][19][9];
                break;
              case arr2[4][27]:
                e[4] = 0;
                r = arr2[64][40][65];
                break;
              case arr2[20][46][65][27]:
                e[4] += 6;
                r = arr2[65][44][26];
                break;
              case arr1[42][23][38]:
                r = e[4] < e[8].length ? arr2[41][48][10] : arr2[21][11][35];
                break;
              case arr2[24][11][0]:
                e[4] += 4;
                r = arr2[24][52][41];
                break;
              case arr2[27][11][47]:
                r = e[4] < e[8].length ? arr2[14][45][62] : arr2[50][7][0];
                break;
              case arr1[65][10][2]:
                e[8][e[4]] = e[2].charCodeAt(e[4] % e[2].length);
                r = arr2[42][62][36];
                break;
              case arr1[62][14][41]:
                e[4] = 0;
                r = arr2[46][13][14];
                break;
              case arr1[38][42][30]:
                e[1] = cookie;
                r = arr2[28][42][11];
                break;
            }
          }
        } catch (a) {}
        a = arr2[8][37][42];
        break;
      case arr2[22][43][18]:
        e[4] = 0;
        a = arr2[65][22][25];
        break;
      case arr2[25][27][15][7]:
        a = e[4] < e[8].length - 5 ? arr2[19][24][21] : arr1[18][43][12];
        break;
      case arr2[8][11][22]:
        e[4] += 3;
        a = arr2[58][31][13];
        break;
    }
  }
}
function s3(a) {
  for (var e = arr2[18][38][52]; e !== arr1[47][5][44];) {
    switch (e) {
      case arr2[6][62][22][32]:
        e = c === 2 ? arr1[20][18][42] : arr2[59][57][58];
        break;
      case arr2[9][57][65]:
        e = c === 1 ? arr1[18][41][51] : arr2[38][25][62];
        break;
      case arr1[3][1][36][32]:
        r[4] ^= r[8][r[1] % 32];
        r[9].push(r[4] & 255);
        e = arr2[57][50][3];
        break;
      case arr2[40][25][61]:
        if (r[5]++ < 8) {
          r[0][0].shift();
        }
        e = arr2[15][51][21];
        break;
      case arr2[17][15][54]:
        e = c === 5 ? arr2[60][64][0] : arr2[27][7][11];
        break;
      case arr1[7][7][43]:
        e = c === 4 ? arr2[46][7][19] : arr2[45][24][54];
        break;
      case arr2[13][42][10]:
        r[4] = s(r[4]);
        e = arr2[36][43][32];
        break;
      case arr1[43][58][34]:
        var r = [arguments];
        r[8] = h3(); // helperfn
        r[1] = 0;
        r[5] = 0;
        e = arr1[61][60][48];
        break;
      case arr1[54][53][0]:
        return r[9];
        break;
      case arr2[44][2][24]:
        r[9] = [];
        e = arr2[33][1][54];
        break;
      case arr1[46][29][0]:
        r[4] = N(r[4]);
        e = arr2[12][3][26];
        break;
      case arr1[43][62][41]:
        e = c === 6 ? arr2[4][2][28] : arr2[23][28][43];
        break;
      case arr2[31][33][13]:
        e = c === 8 ? arr1[21][26][46] : arr2[5][11][57];
        break;
      case arr2[59][42][1]:
        r[4] = i(r[4]);
        e = arr2[6][63][14];
        break;
      case arr1[31][53][29]:
        r[4] = t(r[4]);
        e = arr1[8][42][57][50];
        break;
      case arr2[33][7][60]:
        r[4] = t(r[4]);
        e = arr2[37][14][44];
        break;
      case arr1[22][48][1]:
        e = c === 7 ? arr2[29][53][6] : arr2[31][49][37];
        break;
      case arr1[33][2][63]:
        e = c === 9 ? arr2[28][51][48] : arr1[63][50][56];
        break;
      case arr2[38][30][16]:
        var c = r[1] % 10;
        var e = c === 0 ? arr1[1][26][23] : arr1[40][29][11];
        break;
      case arr1[39][33][42]:
        r[4] = x3(r[4]);
        e = arr2[0][26][38];
        break;
      case arr1[63][60][24]:
        r[4] = x3(r[4]);
        e = arr2[13][53][8];
        break;
      case arr2[65][63][21]:
        r[1]++;
        e = arr2[38][57][36];
        break;
      case arr2[5][33][27]:
        r[4] = o(r[4]);
        e = arr1[62][37][14];
        break;
      case arr1[31][60][15]:
        r[4] = r[0][0].shift();
        e = arr2[20][21][44][52];
        break;
      case arr2[63][54][0]:
        e = r[0][0].length ? arr2[0][50][7] : arr2[47][65][42];
        break;
      case arr1[62][65][21][58]:
        r[4] = o(r[4]);
        e = arr2[17][17][44];
        break;
      case arr1[39][17][43][28]:
        e = c === 3 ? arr1[7][61][9][41] : arr1[4][41][43];
        break;
      case arr2[57][18][11]:
        r[4] = d(r[4]);
        e = arr1[0][25][20];
        break;
    }
  }
}
// 4-P2
function K() {
  return atob(keys.key8); // B3.W3x(425)
}
function o3(a) {
  return h(c(K(), v(a)));
}
function e3(a) {
  return o3(a);
}

// 5-P1
function k3() {
  var a = arr2[41][15][27][28];
  while (a !== arr2[12][52][29]) {
    switch (a) {
      case arr2[62][9][20][24]:
        e[4] = 0;
        a = arr1[64][42][49];
        break;
      case arr1[55][36][25][37]:
        a = e[4] < e[5].length - 5 ? arr2[17][28][15] : arr2[54][33][48];
        break;
      case arr2[34][55][60]:
        return e[5];
        break;
      case arr2[46][57][65]:
        a = V() ? arr1[63][29][2] : arr2[16][9][40][6];
        break;
      case arr2[30][65][16]:
        var e = [arguments];
        e[5] = h(atob(keys.key9)); // const:B3.I2c(375)
        a = arr2[57][6][5];
        break;
      case arr1[60][53][20]:
        try {
          for (var r = arr2[16][34][34]; r !== arr2[39][65][59];) {
            switch (r) {
              case arr1[21][2][52]:
                e[5][e[4]] = e[8].charCodeAt(e[4] % e[8].length);
                r = arr2[26][56][57];
                break;
              case arr1[15][35][31][42]:
                r = arr2[10][27][49];
                break;
              case arr1[50][43][6]:
                e[4] += 4;
                r = arr2[41][48][5];
                break;
              case arr2[8][30][20]:
                e[5][e[4]] = e[6].charCodeAt(e[4] % e[6].length);
                r = arr2[26][18][6];
                break;
              case arr1[44][1][49]:
                e[8] = cookie;
                r = arr2[42][33][65];
                break;
              case arr2[0][60][39]:
                e[4] += 6;
                r = arr1[48][58][44];
                break;
              case arr2[62][32][12][65]:
                r = e[4] < e[5].length ? arr2[53][34][32] : arr1[5][60][54][36];
                break;
              case arr1[58][49][63][3]:
                e[4] = 0;
                r = arr2[22][10][65];
                break;
              case arr2[36][52][41]:
                e[4] = 0;
                r = arr1[55][2][2];
                break;
              case arr1[41][32][16]:
                e[6] = E();
                r = arr1[63][33][3];
                break;
              case arr1[58][56][2]:
                r = e[4] < e[5].length ? arr1[8][25][22][34] : arr2[41][26][29];
                break;
            }
          }
        } catch (a) {}
        a = arr2[30][49][19][24];
        break;
      case arr1[26][35][63]:
        e[5][e[4]] = e[5][e[4] + 2];
        a = arr2[56][61][54][16];
        break;
      case arr2[36][50][34]:
        e[4] += 3;
        a = arr1[48][31][19];
        break;
    }
  }
}
function Q(a) {
  for (var e = arr2[43][57][16]; e !== arr1[12][59][14];) {
    switch (e) {
      case arr1[13][40][32]:
        r[4] = 0;
        e = arr1[64][35][12];
        break;
      case arr1[59][43][59]:
        e = c === 6 ? arr1[1][61][16] : arr1[19][64][53][7];
        break;
      case arr2[60][28][1]:
        e = c === 7 ? arr1[16][60][54] : arr1[7][37][7];
        break;
      case arr1[4][63][1]:
        if (r[4]++ < 6) {
          r[0][0].shift();
        }
        r[6] = r[0][0].shift();
        e = arr2[44][28][16];
        break;
      case arr2[4][11][60]:
        e = r[0][0].length ? arr2[7][60][31] : arr1[54][52][48];
        break;
      case arr1[40][15][0]:
        r[6] = o(r[6]);
        e = arr1[10][37][32];
        break;
      case arr1[19][16][12]:
        r[6] = o(r[6]);
        e = arr2[63][49][38];
        break;
      case arr2[5][3][52]:
        r[6] = I(r[6]);
        e = arr1[25][1][2];
        break;
      case arr1[39][37][54]:
        e = c === 5 ? arr1[44][41][18] : arr2[54][63][59];
        break;
      case arr2[56][5][57]:
        e = c === 9 ? arr1[19][25][61][6] : arr1[2][11][44];
        break;
      case arr1[3][61][58]:
        e = c === 3 ? arr1[3][62][17] : arr1[20][14][57][13];
        break;
      case arr1[15][35][30][40]:
        var r = [arguments];
        r[5] = k3(); // helperfn
        r[8] = 0;
        e = arr1[28][61][38];
        break;
      case arr2[60][42][65]:
        r[6] = t(r[6]);
        e = arr2[61][26][8];
        break;
      case arr2[5][65][37]:
        e = c === 8 ? arr1[6][59][22] : arr1[11][1][45];
        break;
      case arr1[5][38][30]:
        return r[2];
        break;
      case arr2[45][19][25]:
        e = c === 4 ? arr1[26][38][61] : arr1[4][17][12];
        break;
      case arr1[22][40][9]:
        r[8]++;
        e = arr2[12][54][24];
        break;
      case arr2[39][27][26]:
        r[6] ^= r[5][r[8] % 32];
        e = arr1[21][25][4];
        break;
      case arr2[5][51][24]:
        r[6] = t(r[6]);
        e = arr2[4][58][44];
        break;
      case arr2[0][0][11]:
        r[6] = d(r[6]);
        e = arr2[34][0][38];
        break;
      case arr1[60][37][43][57]:
        r[6] = B(r[6]);
        e = arr1[60][26][2];
        break;
      case arr2[2][54][16]:
        r[2].push(r[6] & 255);
        e = arr2[36][40][27];
        break;
      case arr2[42][4][40]:
        r[6] = $(r[6]);
        e = arr1[53][26][26];
        break;
      case arr1[32][8][19]:
        r[6] = d(r[6]);
        e = arr1[31][7][14];
        break;
      case arr2[17][33][24]:
        r[2] = [];
        e = arr1[15][65][42];
        break;
      case arr1[39][54][12]:
        r[6] = N(r[6]);
        e = arr2[26][4][62];
        break;
      case arr1[2][9][17]:
        e = c === 1 ? arr2[13][23][27] : arr1[23][43][32];
        break;
      case arr1[59][41][10]:
        var c = r[8] % 10;
        var e = c === 0 ? arr1[16][11][16][23] : arr2[20][54][11];
        break;
      case arr2[32][12][46][62]:
        e = c === 2 ? arr2[50][56][48] : arr2[62][65][22];
        break;
    }
  }
}
// 5-P2
function P() {
  return atob(keys.key10); // B3.W3x(67)
}
function i3(a) {
  return h(c(P(), v(a)));
}
function H(a) {
  return i3(a);
}

// Decrypt
function decrypt(a) {
  var charArray = h(a = f(a));
  charArray = n3(charArray);
  charArray = W3(charArray);
  charArray = Z(charArray);
  charArray = j(charArray);
  charArray = r3(charArray);
  charArray = a3(charArray);
  charArray = s3(charArray);
  charArray = e3(charArray);
  charArray = Q(charArray);
  charArray = H(charArray);
  let result = v(charArray);
  return JSON.parse(decodeURIComponent(result));
}


const cookie = "..."; // cookie.
decrypt("...") // encrypted text
