import * as React from 'react';
import './style.css';
import { Impressao } from './impressao';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { data } from './data';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function App() {
  const visualizarImpressao = async () => {
    const classeImpressao = new Impressao(data);
    const documento = await classeImpressao.PreparaDocumento();
    pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Criando documentos PDF com ReactJS</p>
      </header>
      <section className="App-body">
        <button className="btn" onClick={visualizarImpressao}>
          Visualizar documento
        </button>
      </section>
    </div>
  );
}
