/**
 * Converts invisible chars
 * @param {string} str
 */
function encodeInvisible(str) {
  var nongraphic = new Set([
    "\u00AD", // shy
    "\u061C", // alm
    "\u070F", // sam
    "\u08E2", // end of ayah
    "\u180E", // mvs
    "\u200B", // zwsp
    "\u200C", // zwnj
    "\u200D", // zwj
    "\u200E", // lrm
    "\u200F", // rlm
    "\u202A", // lre
    "\u202B", // rle
    "\u202D", // lro
    "\u202E", // rlo
    "\u202C", // pdf
    "\u2060", // wjoiner
    "\u2061", // func appln
    "\u2062", // inv x
    "\u2063", // inv sep
    "\u2064", // inv +
    "\u2066", // lri
    "\u2067", // rli
    "\u2068", // fsi
    "\u2069", // pdi
    "\u206A", // iss
    "\u206B", // ass
    "\u206C", // iafs
    "\u206D", // aafs
    "\u206E", // nads
    "\u206F", // nods
    "\uFFF9", // iaa
    "\uFFFA", // ias
    "\uFFFB", // iat

    "\u13430", // vert join
    "\u13431", // horiz join
    "\u13432", // ins top start
    "\u13433", // ins bottom start
    "\u13434", // ins top end
    "\u13435", // ins bottom end
    "\u13436", // overlay mid
    "\u13437", // beg seg
    "\u13438", // end seg

    "\u1BCA0", // sh let overlap
    "\u1BCA1", // sh cont overlap
    "\u1BCA2", // sh format down
    "\u1BCA3", // sh format up

    "\u1D173", // mus beg beam
    "\u1D174", // mus end beam
    "\u1D175", // mus beg tie
    "\u1D176", // mus end tie
    "\u1D177", // mus beg slur
    "\u1D178", // mus end slur
    "\u1D179", // mus beg phrase
    "\u1D17A", // mus end phrase

    "\u2000", // en quad
    "\u2001", // em quad
    "\u2002", // en space
    "\u2003", // em space
    "\u2004", // 3 per em space
    "\u2005", // 4 per em space
    "\u2006", // 6 per em space
    "\u2007", // figure space
    "\u2008", // punctuation space
    "\u2009", // thin space
    "\u200A", // hair space
    "\u205F", // mmsp
    "\u00A0", // nbsp
    "\u3000", // ideographic sp
    "\u202F", // nnbsp

    "\u180B", // mfvs1
    "\u180C", // mfvs2
    "\u180D", // mfvs3

    "\u2028", // line sep

    "\u0000" // null
  ]);

  var newstring = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str.codePointAt(i) === 0x09 ||
      str.codePointAt(i) === 0x0a ||
      str.codePointAt(i) === 0x0d
    )
      newstring += str[i];
    else if (
      str.codePointAt(i) < 32 ||
      (str.codePointAt(i) > 126 && str.codePointAt(i) < 160) ||
      str.codePointAt(i) > 0xe0000
    ) {
      var hex = str.codePointAt(i).toString(16).toUpperCase();
      while (hex.length < 4) hex = "0" + hex;
      newstring += "&#x" + hex + ";";
    } else if (nongraphic.has(str[i])) {
      hex = str.codePointAt(i).toString(16).toUpperCase();
      while (hex.length < 4) hex = "0" + hex;
      newstring += "&#x" + hex + ";";
    } else newstring += str[i];
  }
  return newstring;
}

export default encodeInvisible;
