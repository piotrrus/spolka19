import { Injectable } from '@angular/core';

// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import("c:/Angular/spolka19/node_modules/@types/pdfmake/build/vfs_fonts");

// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
/* eslint-disable @typescript-eslint/no-explicit-any */
// (<any>pdfMake).vfs = pdfFonts.vfs; // .pdfMake.vfs;
// (<any>pdfMake).vfs = pdfFonts.vfs;

// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable()
export class BasePrintHelper {
     public createPdf(content: Content, pdfFileName: string): void {
          const docDefinition: TDocumentDefinitions = {
               content: content,
               styles: {
                    header: { fontSize: 16, bold: true, margin: [20, 0, 0, 10] },
                    subheader: { fontSize: 12, bold: false, margin: [0, 0, 0, 10] },
                    article: { fontSize: 14, bold: true, margin: [0, 0, 0, 10] },
                    list: { fontSize: 10, bold: false, margin: [25, 0, 0, 10] },
                    fabric: { fontSize: 12, bold: false, margin: [0, 0, 0, 10] },
                    footer: { fontSize: 10 },
               },
          };

          // pdfMake.vfs = pdfFonts.vfs =
          pdfFonts.pdfMake.vfs;
          pdfMake.createPdf(docDefinition).download(`${pdfFileName}.pdf`);
     }
}
