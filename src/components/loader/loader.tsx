import React, {ReactNode} from 'react';
import style from './loader.module.css';

function Loader():ReactNode {
  return (
    <div className={style.loader}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        viewBox="0 0 24 24"
      >
        <style>
          {
            '@keyframes spinner_grm3{0%,50%{animation-timing-function:cubic-bezier(.27,.42,.37,.99);r:1px}25%{animation-timing-function:cubic-bezier(.53,0,.61,.73);r:2px}}@keyframes spinner_T3O6{0%{transform:rotate(360deg)}to{transform:rotate(0deg)}}.spinner_EUy1{animation:spinner_grm3 1.2s infinite}'
          }
        </style>
        <g
          style={{
            transformOrigin: 'center',
            animation: 'spinner_T3O6 6s linear infinite',
          }}
        >
          <circle cx={12} cy={3} r={1} className="spinner_EUy1" />
          <circle
            cx={16.5}
            cy={4.21}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '.1s',
            }}
          />
          <circle
            cx={7.5}
            cy={4.21}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '1.1s',
            }}
          />
          <circle
            cx={19.79}
            cy={7.5}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '.2s',
            }}
          />
          <circle
            cx={4.21}
            cy={7.5}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '1s',
            }}
          />
          <circle
            cx={21}
            cy={12}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '.3s',
            }}
          />
          <circle
            cx={3}
            cy={12}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '.9s',
            }}
          />
          <circle
            cx={19.79}
            cy={16.5}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '.4s',
            }}
          />
          <circle
            cx={4.21}
            cy={16.5}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '.8s',
            }}
          />
          <circle
            cx={16.5}
            cy={19.79}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '.5s',
            }}
          />
          <circle
            cx={7.5}
            cy={19.79}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '.7s',
            }}
          />
          <circle
            cx={12}
            cy={21}
            r={1}
            className="spinner_EUy1"
            style={{
              animationDelay: '.6s',
            }}
          />
        </g>
      </svg>
    </div>
  );
}

export default Loader;
