export enum HTML_TABLE {
     BODY = '',
     TITLE = '<h2 style="font-size: 12px;">$title</h2>',
     FOOTER = '<div class="stopka">$footerSubtitle<br>$itle</div>',
     REPORT_TITLE = '<h3 style="font-size: 12px;"> Raport: $title</h3>',
     PRODUCTION_DESCRIPTION_TITLE = '<h3 style="font-size: 12px;"> $title</h3>',
     TABLE = '<table style="cellspacing=0; font-size: 12px; width: 100%; border-spacing: 0px;border: 0px #000000 solid;font-family: Verdana border-collapse: collapse;">$tableBody</table>',
     PRODUCTION_DESCRIPTION_TABLE = '<table style="cellspacing=0; font-size: 8px; width: 100%; border-spacing: 0px;border: 0px #000000 solid;font-family: Verdana border-collapse: collapse;">$tableBody</table>',
     COLUMNS = '<thead><tr>$columns</tr></thead>',
     TD = '<td style="border: 1px solid #ddd;">$content</td>',
}
