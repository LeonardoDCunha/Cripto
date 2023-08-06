import React from 'react';
import styles from './notfoundV2.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.container container-star}>
      {/* star divs */}
      {Array.from({ length: 24 }, (_, index) => (
        <div key={index} className="star-1"></div>
      ))}

      <div className={styles.bird bird-anim}>
        <div className={styles.bird-container}>
          <div className={styles.wing wing-left}>
            <div className={styles.wing-left-top}></div>
          </div>
          <div className={styles.wing wing-right}>
            <div className="wing-right-top"></div>
          </div>
        </div>
      </div>

      <div className="container-title">
        <div className="title">
          <div className="number">4</div>
          <div className="moon">
            <div className="face">
              <div className="mouth"></div>
              <div className="eyes">
                <div className="eye-left"></div>
                <div className="eye-right"></div>
              </div>
            </div>
          </div>
          <div className="number">4</div>
        </div>
        <div className="subtitle">Ops. Parece que você pegou o caminho errado.</div>
      </div>
      <button>Voltar</button>
    </div>
  );
};

export default NotFound;


// <!DOCTYPE html>
// <html lang="pt-br">
//      <head>
//       <meta charset="UTF-8"></meta>
//         <title> Lua 404 Page </title>
//         <link rel="stylesheet" href="./notfound.module.css"></link>
//       </head>
//       <body>
//       <div class="container container-star">
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>
//         <div class="star-1"></div>

//         <div class="bird bird-anim">
//         <div class="bird-container">
//         <div class="wing wing-left">
//         <div class="wing-left-top"></div>
//       </div>

//         <div class="wing wing-right">
//           <div class="wing-right-top"></div>
//       </div> 
//     </div>
//   </div>

//   <div class="container-title">
//     <div class="title">
//           <div class="number">4</div>
//            <div class="moon">
//             <div class="face">
//               <div class="mouth"></div>
//               <div class="eyes">
//                 <div class="eye-left"></div>
//                  <div class="eye-right"></div>
//                </div>
//              </div>
//            </div>
//           <div class="number">4</div>
//         </div>
//        <div class="suvtitle">Ops. Parece que você pegou o caminho errado.</div>
//        </div>
//        <button>Voltar</button>
//     </div>
//   </div>
// </body>
// </html>