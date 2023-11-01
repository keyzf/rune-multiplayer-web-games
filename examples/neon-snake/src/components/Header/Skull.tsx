export function Skull({ size, color }: { size: string; color: string }) {
  return (
    <svg
      style={{ width: size, height: size }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1444 10.4673C11.3874 10.6642 11.4986 11.0358 11.4986 11.6181C11.4986 12.3726 11.048 12.9894 10.5466 13.4362C10.0402 13.8875 9.43764 14.2064 9.0327 14.3646L9.01632 14.371L8.99925 14.375C8.6366 14.4604 8.07939 14.486 7.5984 14.2557C7.35286 14.1382 7.12566 13.9528 6.96155 13.6759C6.79786 13.3997 6.70678 13.0492 6.70678 12.617C6.70678 11.7523 7.03335 11.1734 7.46052 10.8134C7.87703 10.4623 8.37238 10.3326 8.71006 10.3198L8.7147 10.3196H10.5402C10.5491 10.3196 10.561 10.3191 10.5755 10.3184C10.6847 10.3134 10.94 10.3016 11.1444 10.4673ZM10.6215 10.8518C10.5976 10.852 10.5707 10.8523 10.5402 10.8523H8.72423C8.47612 10.8627 8.09563 10.9632 7.78192 11.2276C7.47701 11.4846 7.21791 11.9101 7.21791 12.617C7.21791 12.9705 7.29188 13.2196 7.3964 13.3959C7.5005 13.5716 7.64466 13.6916 7.81175 13.7716C8.1496 13.9334 8.57299 13.9258 8.86988 13.8593C9.23163 13.7156 9.76935 13.4279 10.2144 13.0313C10.6714 12.6241 10.9875 12.1421 10.9875 11.6181C10.9875 11.0683 10.8751 10.9239 10.8306 10.8878C10.784 10.85 10.7385 10.8505 10.6215 10.8518Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8751 10.4673C12.6321 10.6642 12.5209 11.0358 12.5209 11.6181C12.5209 12.3726 12.9714 12.9894 13.4729 13.4362C13.9793 13.8875 14.5818 14.2064 14.9868 14.3646L15.0031 14.371L15.0202 14.375C15.3829 14.4604 15.9401 14.486 16.4211 14.2557C16.6666 14.1382 16.8938 13.9528 17.0579 13.6759C17.2216 13.3997 17.3127 13.0492 17.3127 12.617C17.3127 11.7523 16.9861 11.1734 16.5589 10.8134C16.1424 10.4623 15.6471 10.3326 15.3094 10.3198L15.3048 10.3196H13.4792C13.4703 10.3196 13.4584 10.3191 13.4439 10.3184C13.3348 10.3134 13.0794 10.3016 12.8751 10.4673ZM13.398 10.8518C13.4219 10.852 13.4488 10.8523 13.4792 10.8523H15.2952C15.5433 10.8627 15.9238 10.9632 16.2375 11.2276C16.5425 11.4846 16.8016 11.9101 16.8016 12.617C16.8016 12.9705 16.7276 13.2196 16.6231 13.3959C16.519 13.5716 16.3748 13.6916 16.2077 13.7716C15.8699 13.9334 15.4465 13.9258 15.1496 13.8593C14.7878 13.7156 14.2501 13.4279 13.805 13.0313C13.3481 12.6241 13.032 12.1421 13.032 11.6181C13.032 11.0683 13.1444 10.9239 13.1889 10.8878C13.2354 10.85 13.2809 10.8505 13.398 10.8518Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0097 3.99354L12.012 3.99356C13.2305 4.0049 15.0611 4.28243 16.5971 5.08915C18.1402 5.89962 19.4211 7.26815 19.4211 9.45393V9.47086L19.419 9.48766C19.3546 10.0136 19.157 11.4363 18.5646 12.7005C18.4523 12.9401 18.4395 13.2083 18.4931 13.517C18.5476 13.8305 18.6653 14.1593 18.7934 14.5146L18.8025 14.5397C18.9629 14.9844 19.142 15.4811 19.1484 15.955C19.1518 16.2042 19.1082 16.4548 18.988 16.6943C18.868 16.9336 18.6792 17.1465 18.4137 17.3327C17.6615 17.8604 16.5639 18.0747 15.9975 18.1853L15.98 18.1887C15.8798 18.2083 15.7989 18.2241 15.737 18.2379C15.5648 18.2764 15.4589 18.3268 15.4084 18.4052C15.3666 18.4699 15.3099 18.643 15.4741 19.0787C15.6295 19.4911 15.5319 19.8352 15.3571 20.074C15.1959 20.2943 14.9663 20.4305 14.8156 20.4675L14.5517 20.5322L14.5053 20.2538C14.4578 19.9693 14.2703 19.8289 14.1485 19.812C14.0937 19.8045 14.0586 19.82 14.0336 19.847C14.0048 19.878 13.9584 19.9593 13.9584 20.1416V20.8064L12.2857 21.0485L12.2974 20.7307C12.3018 20.6132 12.2832 20.4418 12.2256 20.3112C12.1725 20.1909 12.108 20.1416 12.0097 20.1416C11.9114 20.1416 11.847 20.1909 11.7939 20.3112C11.7362 20.4418 11.7177 20.6132 11.722 20.7307L11.7338 21.0485L10.0611 20.8064V20.1416C10.0611 19.9593 10.0146 19.878 9.98588 19.847C9.9609 19.82 9.92572 19.8045 9.87099 19.812C9.74916 19.8289 9.56169 19.9693 9.5142 20.2538L9.46776 20.5322L9.20388 20.4675C9.05313 20.4305 8.82358 20.2943 8.66239 20.074C8.4876 19.8352 8.38992 19.4911 8.54537 19.0787C8.70961 18.643 8.65285 18.4699 8.61109 18.4052C8.56053 18.3268 8.45468 18.2764 8.28245 18.2379C8.22054 18.2241 8.13969 18.2083 8.03942 18.1887L8.02198 18.1853C7.45559 18.0747 6.35796 17.8604 5.60571 17.3327C5.34028 17.1465 5.15146 16.9336 5.03142 16.6943C4.91126 16.4548 4.8677 16.2042 4.87105 15.955C4.87741 15.4811 5.05657 14.9844 5.21699 14.5397L5.22605 14.5146C5.35413 14.1593 5.47188 13.8305 5.52633 13.517C5.57994 13.2083 5.56713 12.9401 5.45488 12.7005C4.86249 11.4363 4.66486 10.0136 4.60044 9.48766L4.59838 9.47086V9.45393C4.59838 7.26815 5.87925 5.89962 7.42235 5.08915C8.95832 4.28243 10.7889 4.0049 12.0074 3.99356L12.0097 3.99354ZM5.10953 9.43715C5.17493 9.96642 5.36681 11.2986 5.91417 12.4668C6.09056 12.8432 6.09436 13.2372 6.02929 13.6119C5.96582 13.9773 5.83203 14.3483 5.70885 14.6899L5.70451 14.702C5.53289 15.178 5.38711 15.5912 5.38213 15.9624C5.37974 16.1402 5.41049 16.3002 5.48437 16.4475C5.55838 16.595 5.68334 16.745 5.89112 16.8908C6.54753 17.3513 7.54815 17.5508 8.13354 17.6651L8.13638 17.6656C8.23304 17.6845 8.32036 17.7015 8.38955 17.717C8.56872 17.757 8.86218 17.8397 9.03525 18.108C9.2171 18.3898 9.20827 18.7769 9.0211 19.2735C8.93831 19.4931 8.9897 19.6429 9.06881 19.751C9.08556 19.7739 9.10393 19.7952 9.1232 19.8149C9.27133 19.5202 9.52843 19.322 9.80388 19.2839C9.99673 19.2573 10.2011 19.3121 10.3539 19.4772C10.5028 19.6383 10.5722 19.8709 10.5722 20.1416V20.3425L11.2306 20.4378C11.2484 20.3235 11.2794 20.2022 11.3295 20.0886C11.4356 19.8482 11.648 19.6089 12.0097 19.6089C12.3715 19.6089 12.5839 19.8482 12.6899 20.0886C12.7401 20.2022 12.7711 20.3235 12.7889 20.4378L13.4473 20.3425V20.1416C13.4473 19.8709 13.5166 19.6383 13.6656 19.4772C13.8183 19.3121 14.0227 19.2573 14.2156 19.2839C14.491 19.322 14.7481 19.5202 14.8963 19.8149C14.9155 19.7952 14.9339 19.7739 14.9507 19.751C15.0298 19.6429 15.0811 19.4931 14.9984 19.2735C14.8112 18.7769 14.8024 18.3898 14.9842 18.108C15.1573 17.8397 15.4507 17.757 15.6299 17.717C15.6991 17.7015 15.7864 17.6845 15.8831 17.6656L15.8859 17.6651C16.4713 17.5508 17.4719 17.3513 18.1283 16.8908C18.3361 16.745 18.4611 16.595 18.5351 16.4475C18.609 16.3002 18.6397 16.1402 18.6373 15.9624C18.6323 15.5912 18.4866 15.178 18.315 14.702L18.3106 14.6899C18.1874 14.3483 18.0536 13.9773 17.9902 13.6119C17.9251 13.2372 17.9289 12.8432 18.1053 12.4668C18.6526 11.2986 18.8445 9.96642 18.9099 9.43715C18.9035 7.53066 17.8014 6.31818 16.3671 5.56488C14.9224 4.80612 13.1765 4.53747 12.0097 4.52628C10.843 4.53747 9.09704 4.80612 7.65237 5.56488C6.2181 6.31818 5.11596 7.53066 5.10953 9.43715Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0362 13.8553L12.2481 14.158C12.3969 14.3705 12.6188 14.7165 12.8048 15.0701C12.8978 15.2469 12.9844 15.4302 13.0483 15.6028C13.1102 15.77 13.1598 15.9501 13.1598 16.1129C13.1598 16.3108 13.1025 16.4788 13.0034 16.613C12.907 16.7435 12.7812 16.8287 12.6611 16.8847C12.4258 16.9942 12.1687 17.0119 12.0417 17.0119C11.8973 17.0119 11.6422 16.972 11.4142 16.8558C11.1846 16.7386 10.9236 16.5083 10.9236 16.1129C10.9236 15.96 10.9753 15.7854 11.0359 15.6261C11.0995 15.4591 11.1855 15.2772 11.2779 15.0995C11.463 14.7436 11.6839 14.3857 11.8316 14.1634L12.0362 13.8553ZM12.0462 14.7909C11.9416 14.9627 11.8283 15.1591 11.7273 15.3534C11.64 15.5211 11.5643 15.6825 11.511 15.8225C11.4549 15.9702 11.4347 16.0661 11.4347 16.1129C11.4347 16.2169 11.4932 16.3029 11.6389 16.3773C11.7863 16.4524 11.9624 16.4792 12.0417 16.4792C12.1383 16.4792 12.3124 16.4636 12.4525 16.3983C12.5201 16.3668 12.568 16.3293 12.5984 16.2881C12.626 16.2507 12.6486 16.198 12.6486 16.1129C12.6486 16.0494 12.6263 15.9429 12.5714 15.7946C12.5186 15.6518 12.4434 15.491 12.3567 15.3262C12.2583 15.1392 12.1483 14.9531 12.0462 14.7909Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.35284 2.45223L2.35626 2.45275L2.39327 2.1892C2.43373 1.90103 2.56556 1.46577 2.82082 1.11419C3.07012 0.770809 3.42675 0.517692 3.93999 0.533424C4.63864 0.554841 5.02338 0.827849 5.23389 1.13218C5.45298 1.44892 5.50624 1.83305 5.47802 2.09767C5.44334 2.42298 5.41282 2.87542 5.46113 3.32229C5.50875 3.7628 5.63745 4.24157 5.95791 4.57557L6.13862 4.76391L6.50005 4.38722L6.31933 4.19888C6.12025 3.99139 6.01177 3.65792 5.96904 3.26265C5.927 2.87374 5.95294 2.46686 5.98603 2.1565C6.02558 1.78545 5.9546 1.26318 5.6485 0.820648C5.33382 0.365717 4.79242 0.0266048 3.95502 0.000935296C3.23943 -0.0210007 2.73768 0.34585 2.41323 0.792736C2.12986 1.18304 1.97408 1.6419 1.90803 1.98863C1.57535 2.05747 1.13509 2.21983 0.760606 2.51517C0.331833 2.85333 -0.0201486 3.37627 0.00089824 4.12209C0.0255276 4.99487 0.350895 5.55914 0.787387 5.88712C1.21198 6.20615 1.71309 6.28013 2.06909 6.2389C2.36687 6.20441 2.75726 6.17737 3.13041 6.22119C3.50965 6.26573 3.82961 6.3788 4.02869 6.58629L4.2094 6.77463L4.57083 6.39794L4.39012 6.2096C4.06965 5.8756 3.61029 5.74146 3.18764 5.69182C2.75888 5.64147 2.32477 5.67329 2.01265 5.70944C1.75876 5.73884 1.39019 5.68333 1.08629 5.45499C0.794296 5.23558 0.532353 4.83459 0.511805 4.10643C0.49671 3.57151 0.739568 3.19981 1.06903 2.93998C1.40636 2.67394 1.82398 2.53654 2.10047 2.49437L2.35334 2.4558L2.35284 2.45223Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6328 2.45223L21.6293 2.45275L21.5923 2.1892C21.5519 1.90103 21.42 1.46577 21.1648 1.11419C20.9155 0.770809 20.5589 0.517692 20.0456 0.533424C19.347 0.554841 18.9622 0.827849 18.7517 1.13218C18.5326 1.44892 18.4794 1.83305 18.5076 2.09767C18.5423 2.42298 18.5728 2.87542 18.5245 3.32229C18.4769 3.7628 18.3482 4.24157 18.0277 4.57557L17.847 4.76391L17.4856 4.38722L17.6663 4.19888C17.8654 3.99139 17.9738 3.65792 18.0166 3.26265C18.0586 2.87374 18.0327 2.46686 17.9996 2.1565C17.96 1.78545 18.031 1.26318 18.3371 0.820648C18.6518 0.365717 19.1932 0.0266048 20.0306 0.000935296C20.7462 -0.0210007 21.2479 0.34585 21.5724 0.792736C21.8557 1.18304 22.0115 1.6419 22.0776 1.98863C22.4103 2.05747 22.8505 2.21983 23.225 2.51517C23.6538 2.85333 24.0058 3.37627 23.9847 4.12209C23.9601 4.99487 23.6347 5.55914 23.1982 5.88712C22.7736 6.20615 22.2725 6.28013 21.9165 6.2389C21.6187 6.20441 21.2283 6.17737 20.8552 6.22119C20.476 6.26573 20.156 6.3788 19.9569 6.58629L19.7762 6.77463L19.4148 6.39794L19.5955 6.2096C19.916 5.8756 20.3753 5.74146 20.798 5.69182C21.2267 5.64147 21.6608 5.67329 21.973 5.70944C22.2269 5.73884 22.5954 5.68333 22.8993 5.45499C23.1913 5.23558 23.4533 4.83459 23.4738 4.10643C23.4889 3.57151 23.246 3.19981 22.9166 2.93998C22.5793 2.67394 22.1616 2.53654 21.8851 2.49437L21.6323 2.4558L21.6328 2.45223Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6472 21.5478L21.6437 21.5472L21.6067 21.8108C21.5663 22.099 21.4344 22.5342 21.1792 22.8858C20.9299 23.2292 20.5733 23.4823 20.06 23.4666C19.3614 23.4452 18.9766 23.1721 18.7661 22.8678C18.547 22.5511 18.4938 22.1669 18.522 21.9023C18.527 21.8549 18.5335 21.8034 18.5403 21.7483C18.5761 21.4616 18.6242 21.0759 18.5575 20.6434C18.4759 20.1143 18.2282 19.5252 17.6362 18.8905L17.458 18.6995L17.0916 19.0709L17.2697 19.2619C17.7958 19.8258 17.9895 20.3172 18.0528 20.7279C18.1067 21.0773 18.0702 21.3764 18.0352 21.6619C18.0278 21.723 18.0204 21.7834 18.014 21.8435C17.9744 22.2145 18.0454 22.7368 18.3515 23.1793C18.6662 23.6343 19.2076 23.9734 20.045 23.9991C20.7606 24.021 21.2623 23.6541 21.5868 23.2073C21.8701 22.817 22.0259 22.3581 22.092 22.0114C22.4247 21.9425 22.8649 21.7802 23.2394 21.4848C23.6682 21.1467 24.0202 20.6237 23.9991 19.8779C23.9745 19.0051 23.6491 18.4409 23.2126 18.1129C22.788 17.7939 22.2869 17.7199 21.9309 17.7611C21.6331 17.7956 21.2427 17.8226 20.8696 17.7788C20.4903 17.7343 20.1704 17.6212 19.9713 17.4137L19.7906 17.2254L19.4292 17.6021L19.6099 17.7904C19.9304 18.1244 20.3897 18.2585 20.8124 18.3082C21.2411 18.3585 21.6752 18.3267 21.9874 18.2906C22.2412 18.2612 22.6098 18.3167 22.9137 18.545C23.2057 18.7644 23.4676 19.1654 23.4882 19.8936C23.5033 20.4285 23.2604 20.8002 22.931 21.06C22.5936 21.3261 22.176 21.4635 21.8995 21.5056L21.6467 21.5442L21.6472 21.5478Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.35283 21.5478L2.35626 21.5472L2.39327 21.8108C2.43373 22.099 2.56556 22.5342 2.82081 22.8858C3.07012 23.2292 3.42675 23.4823 3.93999 23.4666C4.63864 23.4452 5.02338 23.1721 5.23389 22.8678C5.45298 22.5511 5.50623 22.1669 5.47802 21.9023C5.47297 21.8549 5.46654 21.8034 5.45967 21.7483C5.42392 21.4616 5.37581 21.0759 5.44252 20.6434C5.52411 20.1143 5.77179 19.5252 6.36381 18.8905L6.54196 18.6995L6.90844 19.0709L6.73029 19.2619C6.20422 19.8258 6.0105 20.3172 5.94717 20.7279C5.89329 21.0773 5.92985 21.3764 5.96477 21.6619C5.97223 21.723 5.97961 21.7834 5.98602 21.8435C6.02558 22.2145 5.9546 22.7368 5.6485 23.1793C5.33382 23.6343 4.79242 23.9734 3.95502 23.9991C3.23943 24.021 2.73768 23.6542 2.41323 23.2073C2.12986 22.817 1.97408 22.3581 1.90803 22.0114C1.57535 21.9425 1.13509 21.7802 0.760605 21.4848C0.331833 21.1467 -0.0201495 20.6237 0.000897387 19.8779C0.0255268 19.0051 0.350894 18.4409 0.787386 18.1129C1.21198 17.7939 1.71309 17.7199 2.06909 17.7611C2.36687 17.7956 2.75726 17.8226 3.13041 17.7788C3.50965 17.7343 3.82961 17.6212 4.02869 17.4137L4.2094 17.2254L4.57083 17.6021L4.39011 17.7904C4.06965 18.1244 3.61029 18.2585 3.18763 18.3082C2.75888 18.3585 2.32477 18.3267 2.01265 18.2906C1.75875 18.2612 1.39019 18.3167 1.08629 18.545C0.794295 18.7644 0.532353 19.1654 0.511804 19.8936C0.496709 20.4285 0.739567 20.8002 1.06903 21.06C1.40636 21.3261 1.82398 21.4635 2.10047 21.5056L2.35334 21.5442L2.35283 21.5478Z"
        fill={color}
      />
    </svg>
  )
}