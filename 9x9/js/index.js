var a=1;function w(d){document.write(d)};w('<table height="300"width="900"><tbody class="b2">');while (a<10){var b=1;w('<tr>');while (a+1>b){var c=a*b;if (c<10){c="0".concat(c)};w(`<td><span>${b}×${a}=${c}</span></td>`);b++};w('</tr>');a++};w('</tbody></table>')