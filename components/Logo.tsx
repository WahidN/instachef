interface Properties {
  smallLogo?: boolean;
}

export default function Logo({ smallLogo }: Properties) {
  if (smallLogo) {
    return (
      <svg width="136" viewBox="0 0 136 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.44 7.84V22H33V7.84H37.44ZM47.3453 10.64C48.6386 10.64 49.6453 11.0733 50.3653 11.94C51.0986 12.8067 51.4653 13.98 51.4653 15.46V22H47.0453V16.02C47.0453 15.4867 46.8986 15.0667 46.6053 14.76C46.3253 14.44 45.9453 14.28 45.4653 14.28C44.972 14.28 44.5853 14.44 44.3053 14.76C44.0253 15.0667 43.8853 15.4867 43.8853 16.02V22H39.4453V10.72H43.8853V12.44C44.232 11.9067 44.692 11.4733 45.2653 11.14C45.852 10.8067 46.5453 10.64 47.3453 10.64ZM58.4106 22.14C57.344 22.14 56.3973 21.9667 55.5706 21.62C54.7573 21.2733 54.1106 20.7933 53.6306 20.18C53.1506 19.5667 52.8773 18.8733 52.8106 18.1H57.0706C57.124 18.4333 57.264 18.68 57.4906 18.84C57.7306 19 58.0306 19.08 58.3906 19.08C58.6173 19.08 58.7973 19.0333 58.9306 18.94C59.064 18.8333 59.1306 18.7067 59.1306 18.56C59.1306 18.3067 58.9906 18.1267 58.7106 18.02C58.4306 17.9133 57.9573 17.7933 57.2906 17.66C56.4773 17.5 55.804 17.3267 55.2706 17.14C54.7506 16.9533 54.2906 16.6333 53.8906 16.18C53.504 15.7267 53.3106 15.1 53.3106 14.3C53.3106 13.6067 53.4906 12.98 53.8506 12.42C54.224 11.8467 54.7706 11.4 55.4906 11.08C56.2106 10.7467 57.084 10.58 58.1106 10.58C59.6306 10.58 60.8173 10.9533 61.6706 11.7C62.5373 12.4467 63.0573 13.42 63.2306 14.62H59.2906C59.224 14.3133 59.084 14.08 58.8706 13.92C58.6573 13.7467 58.3706 13.66 58.0106 13.66C57.784 13.66 57.6106 13.7067 57.4906 13.8C57.3706 13.88 57.3106 14.0067 57.3106 14.18C57.3106 14.4067 57.4506 14.58 57.7306 14.7C58.0106 14.8067 58.4573 14.92 59.0706 15.04C59.884 15.2 60.5706 15.38 61.1306 15.58C61.6906 15.78 62.1773 16.1267 62.5906 16.62C63.004 17.1 63.2106 17.7667 63.2106 18.62C63.2106 19.2867 63.0173 19.8867 62.6306 20.42C62.244 20.9533 61.684 21.3733 60.9506 21.68C60.2306 21.9867 59.384 22.14 58.4106 22.14ZM71.9927 18.22V22H70.3127C67.2193 22 65.6727 20.46 65.6727 17.38V14.42H64.2727V10.72H65.6727V8H70.1127V10.72H71.9527V14.42H70.1127V17.46C70.1127 17.7267 70.1727 17.92 70.2927 18.04C70.426 18.16 70.6393 18.22 70.9327 18.22H71.9927ZM73.0836 16.36C73.0836 15.1733 73.2836 14.1467 73.6836 13.28C74.0969 12.4 74.6569 11.7333 75.3636 11.28C76.0703 10.8133 76.8636 10.58 77.7436 10.58C78.4769 10.58 79.1103 10.7333 79.6436 11.04C80.1769 11.3333 80.5836 11.74 80.8636 12.26V10.72H85.2836V22H80.8636V20.46C80.5836 20.98 80.1769 21.3933 79.6436 21.7C79.1103 21.9933 78.4769 22.14 77.7436 22.14C76.8636 22.14 76.0703 21.9133 75.3636 21.46C74.6569 20.9933 74.0969 20.3267 73.6836 19.46C73.2836 18.58 73.0836 17.5467 73.0836 16.36ZM80.8636 16.36C80.8636 15.76 80.7103 15.2933 80.4036 14.96C80.0969 14.6267 79.7036 14.46 79.2236 14.46C78.7436 14.46 78.3503 14.6267 78.0436 14.96C77.7369 15.2933 77.5836 15.76 77.5836 16.36C77.5836 16.96 77.7369 17.4267 78.0436 17.76C78.3503 18.0933 78.7436 18.26 79.2236 18.26C79.7036 18.26 80.0969 18.0933 80.4036 17.76C80.7103 17.4267 80.8636 16.96 80.8636 16.36ZM86.8773 14.9C86.8773 13.5 87.1573 12.2533 87.7173 11.16C88.2907 10.0667 89.104 9.22 90.1573 8.62C91.2107 8.00667 92.4507 7.7 93.8773 7.7C95.104 7.7 96.1973 7.93333 97.1573 8.4C98.1307 8.85333 98.9173 9.5 99.5173 10.34C100.131 11.18 100.537 12.16 100.737 13.28H96.0573C95.844 12.8133 95.5373 12.4533 95.1373 12.2C94.7507 11.9333 94.304 11.8 93.7973 11.8C93.0507 11.8 92.4573 12.08 92.0173 12.64C91.5907 13.2 91.3773 13.9533 91.3773 14.9C91.3773 15.8467 91.5907 16.6 92.0173 17.16C92.4573 17.72 93.0507 18 93.7973 18C94.304 18 94.7507 17.8733 95.1373 17.62C95.5373 17.3533 95.844 16.9867 96.0573 16.52H100.737C100.537 17.64 100.131 18.62 99.5173 19.46C98.9173 20.3 98.1307 20.9533 97.1573 21.42C96.1973 21.8733 95.104 22.1 93.8773 22.1C92.4507 22.1 91.2107 21.8 90.1573 21.2C89.104 20.5867 88.2907 19.7333 87.7173 18.64C87.1573 17.5467 86.8773 16.3 86.8773 14.9ZM110.236 10.64C111.529 10.64 112.536 11.0733 113.256 11.94C113.989 12.8067 114.356 13.98 114.356 15.46V22H109.936V16.02C109.936 15.4867 109.789 15.0667 109.496 14.76C109.216 14.44 108.836 14.28 108.356 14.28C107.863 14.28 107.476 14.44 107.196 14.76C106.916 15.0667 106.776 15.4867 106.776 16.02V22H102.336V7.2H106.776V12.44C107.123 11.9067 107.583 11.4733 108.156 11.14C108.743 10.8067 109.436 10.64 110.236 10.64ZM127.201 16.26C127.201 16.5667 127.181 16.86 127.141 17.14H120.001C120.068 18.1133 120.475 18.6 121.221 18.6C121.701 18.6 122.048 18.38 122.261 17.94H126.961C126.801 18.74 126.461 19.46 125.941 20.1C125.435 20.7267 124.788 21.2267 124.001 21.6C123.228 21.96 122.375 22.14 121.441 22.14C120.321 22.14 119.321 21.9067 118.441 21.44C117.575 20.9733 116.895 20.3067 116.401 19.44C115.921 18.56 115.681 17.5333 115.681 16.36C115.681 15.1867 115.921 14.1667 116.401 13.3C116.895 12.42 117.575 11.7467 118.441 11.28C119.321 10.8133 120.321 10.58 121.441 10.58C122.561 10.58 123.555 10.8133 124.421 11.28C125.301 11.7333 125.981 12.3867 126.461 13.24C126.955 14.0933 127.201 15.1 127.201 16.26ZM122.701 15.2C122.701 14.8267 122.581 14.5467 122.341 14.36C122.101 14.16 121.801 14.06 121.441 14.06C120.655 14.06 120.195 14.44 120.061 15.2H122.701ZM135.105 9.92C134.865 9.89333 134.699 9.88 134.605 9.88C134.272 9.88 134.019 9.94667 133.845 10.08C133.672 10.2 133.552 10.4133 133.485 10.72H135.105V14.42H133.445V22H129.005V14.42H127.805V10.72H129.005C129.032 9.25333 129.492 8.12 130.385 7.32C131.292 6.50667 132.559 6.1 134.185 6.1C134.372 6.1 134.679 6.11333 135.105 6.14V9.92Z"
          fill="#141414"
        />
        <g clipPath="url(#clip0_25_149)">
          <path
            d="M4.41468 5C2.85309 5.0003 1.5827 6.2709 1.5827 7.83238V22.1677C1.5827 23.7293 2.85309 24.9999 4.41478 25.0001H17.7827C18.1332 25.0001 18.4173 24.716 18.4173 24.3655V22.1677V19.9699V10.0302V5.63459C18.4173 5.28409 18.1332 5 17.7827 5H4.41468ZM4.41478 6.26917H17.1481V10.0302V19.3352H4.41468C3.83726 19.3353 3.30004 19.5095 2.85187 19.8073V7.83238C2.85187 6.97057 3.55307 6.26927 4.41478 6.26917ZM17.1481 23.7308H4.41488C3.55307 23.7307 2.85187 23.0294 2.85187 22.1676C2.85187 21.3058 3.55296 20.6045 4.41478 20.6044H17.1481V21.533H7.15619C6.8057 21.533 6.52161 21.8171 6.52161 22.1676C6.52161 22.5181 6.8057 22.8022 7.15619 22.8022H17.1481V23.7308Z"
            fill="#141414"
          />
          <path
            d="M7.46231 13.9045V16.3072C7.46231 16.6577 7.7464 16.9418 8.09689 16.9418H11.903C12.2535 16.9418 12.5376 16.6577 12.5376 16.3072V13.9046C13.376 13.568 13.9572 12.7458 13.9572 11.806C13.9572 10.5942 12.999 9.60211 11.8006 9.54749C11.3782 8.98844 10.7199 8.65491 10 8.65491C9.27986 8.65491 8.62172 8.98844 8.19934 9.54749C7.00084 9.60211 6.04266 10.5943 6.04266 11.806C6.04266 12.7459 6.62394 13.568 7.46231 13.9045ZM8.30361 10.8143C8.35164 10.8143 8.40048 10.8179 8.44911 10.825C8.72183 10.8653 8.98856 10.7249 9.1103 10.4779C9.27895 10.1364 9.62 9.92408 10.0002 9.92408C10.3804 9.92408 10.7214 10.1364 10.8903 10.4781C11.0121 10.7251 11.2801 10.8651 11.5516 10.825C11.5999 10.8179 11.6486 10.8143 11.6967 10.8143C12.2435 10.8143 12.6884 11.2592 12.6884 11.8061C12.6884 12.3041 12.3165 12.7269 11.8234 12.7895C11.5064 12.8297 11.2687 13.0994 11.2687 13.419V15.6726H8.73148V13.4609C8.73148 13.4602 8.73158 13.4594 8.73158 13.4588C8.7526 13.1244 8.51003 12.8313 8.17771 12.7894C7.68406 12.7271 7.31183 12.3044 7.31183 11.806C7.31183 11.2591 7.75675 10.8143 8.30361 10.8143Z"
            fill="#141414"
          />
        </g>
        <defs>
          <clipPath id="clip0_25_149">
            <rect width="20" height="20" fill="white" transform="translate(0 5)" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg width="100" viewBox="0 0 125 139" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.528 110.823V127.815H1.2V110.823H6.528ZM18.4144 114.183C19.9664 114.183 21.1744 114.703 22.0384 115.743C22.9184 116.783 23.3584 118.191 23.3584 119.967V127.815H18.0544V120.639C18.0544 119.999 17.8784 119.495 17.5264 119.127C17.1904 118.743 16.7344 118.551 16.1584 118.551C15.5664 118.551 15.1024 118.743 14.7664 119.127C14.4304 119.495 14.2624 119.999 14.2624 120.639V127.815H8.93438V114.279H14.2624V116.343C14.6784 115.703 15.2304 115.183 15.9184 114.783C16.6224 114.383 17.4544 114.183 18.4144 114.183ZM31.6928 127.983C30.4128 127.983 29.2768 127.775 28.2848 127.359C27.3088 126.943 26.5328 126.367 25.9568 125.631C25.3808 124.895 25.0528 124.063 24.9728 123.135H30.0848C30.1488 123.535 30.3168 123.831 30.5888 124.023C30.8768 124.215 31.2368 124.311 31.6688 124.311C31.9408 124.311 32.1568 124.255 32.3168 124.143C32.4768 124.015 32.5568 123.863 32.5568 123.687C32.5568 123.383 32.3888 123.167 32.0528 123.039C31.7168 122.911 31.1488 122.767 30.3488 122.607C29.3728 122.415 28.5648 122.207 27.9248 121.983C27.3008 121.759 26.7488 121.375 26.2688 120.831C25.8048 120.287 25.5728 119.535 25.5728 118.575C25.5728 117.743 25.7888 116.991 26.2208 116.319C26.6688 115.631 27.3248 115.095 28.1888 114.711C29.0528 114.311 30.1008 114.111 31.3328 114.111C33.1568 114.111 34.5808 114.559 35.6048 115.455C36.6448 116.351 37.2688 117.519 37.4768 118.959H32.7488C32.6688 118.591 32.5008 118.311 32.2448 118.119C31.9888 117.911 31.6448 117.807 31.2128 117.807C30.9408 117.807 30.7328 117.863 30.5888 117.975C30.4448 118.071 30.3728 118.223 30.3728 118.431C30.3728 118.703 30.5408 118.911 30.8768 119.055C31.2128 119.183 31.7488 119.319 32.4848 119.463C33.4608 119.655 34.2848 119.871 34.9568 120.111C35.6288 120.351 36.2128 120.767 36.7088 121.359C37.2048 121.935 37.4528 122.735 37.4528 123.759C37.4528 124.559 37.2208 125.279 36.7568 125.919C36.2928 126.559 35.6208 127.063 34.7408 127.431C33.8768 127.799 32.8608 127.983 31.6928 127.983ZM47.9912 123.279V127.815H45.9752C42.2632 127.815 40.4072 125.967 40.4072 122.271V118.719H38.7272V114.279H40.4072V111.015H45.7352V114.279H47.9432V118.719H45.7352V122.367C45.7352 122.687 45.8072 122.919 45.9512 123.063C46.1112 123.207 46.3672 123.279 46.7192 123.279H47.9912ZM49.3003 121.047C49.3003 119.623 49.5403 118.391 50.0203 117.351C50.5163 116.295 51.1883 115.495 52.0363 114.951C52.8843 114.391 53.8363 114.111 54.8923 114.111C55.7723 114.111 56.5323 114.295 57.1723 114.663C57.8123 115.015 58.3003 115.503 58.6363 116.127V114.279H63.9403V127.815H58.6363V125.967C58.3003 126.591 57.8123 127.087 57.1723 127.455C56.5323 127.807 55.7723 127.983 54.8923 127.983C53.8363 127.983 52.8843 127.711 52.0363 127.167C51.1883 126.607 50.5163 125.807 50.0203 124.767C49.5403 123.711 49.3003 122.471 49.3003 121.047ZM58.6363 121.047C58.6363 120.327 58.4523 119.767 58.0843 119.367C57.7163 118.967 57.2443 118.767 56.6683 118.767C56.0923 118.767 55.6203 118.967 55.2523 119.367C54.8843 119.767 54.7003 120.327 54.7003 121.047C54.7003 121.767 54.8843 122.327 55.2523 122.727C55.6203 123.127 56.0923 123.327 56.6683 123.327C57.2443 123.327 57.7163 123.127 58.0843 122.727C58.4523 122.327 58.6363 121.767 58.6363 121.047ZM65.8528 119.295C65.8528 117.615 66.1888 116.119 66.8608 114.807C67.5488 113.495 68.5248 112.479 69.7888 111.759C71.0528 111.023 72.5408 110.655 74.2528 110.655C75.7248 110.655 77.0368 110.935 78.1888 111.495C79.3568 112.039 80.3008 112.815 81.0208 113.823C81.7568 114.831 82.2448 116.007 82.4848 117.351H76.8688C76.6128 116.791 76.2448 116.359 75.7648 116.055C75.3008 115.735 74.7648 115.575 74.1568 115.575C73.2608 115.575 72.5488 115.911 72.0208 116.583C71.5088 117.255 71.2528 118.159 71.2528 119.295C71.2528 120.431 71.5088 121.335 72.0208 122.007C72.5488 122.679 73.2608 123.015 74.1568 123.015C74.7648 123.015 75.3008 122.863 75.7648 122.559C76.2448 122.239 76.6128 121.799 76.8688 121.239H82.4848C82.2448 122.583 81.7568 123.759 81.0208 124.767C80.3008 125.775 79.3568 126.559 78.1888 127.119C77.0368 127.663 75.7248 127.935 74.2528 127.935C72.5408 127.935 71.0528 127.575 69.7888 126.855C68.5248 126.119 67.5488 125.095 66.8608 123.783C66.1888 122.471 65.8528 120.975 65.8528 119.295ZM93.8831 114.183C95.4351 114.183 96.6431 114.703 97.5071 115.743C98.3871 116.783 98.8271 118.191 98.8271 119.967V127.815H93.5231V120.639C93.5231 119.999 93.3471 119.495 92.9951 119.127C92.6591 118.743 92.2031 118.551 91.6271 118.551C91.0351 118.551 90.5711 118.743 90.2351 119.127C89.8991 119.495 89.7311 119.999 89.7311 120.639V127.815H84.4031V110.055H89.7311V116.343C90.1471 115.703 90.6991 115.183 91.3871 114.783C92.0911 114.383 92.9231 114.183 93.8831 114.183ZM114.242 120.927C114.242 121.295 114.218 121.647 114.17 121.983H105.602C105.682 123.151 106.17 123.735 107.066 123.735C107.642 123.735 108.058 123.471 108.314 122.943H113.954C113.762 123.903 113.354 124.767 112.73 125.535C112.122 126.287 111.346 126.887 110.402 127.335C109.474 127.767 108.45 127.983 107.33 127.983C105.986 127.983 104.786 127.703 103.73 127.143C102.69 126.583 101.874 125.783 101.282 124.743C100.706 123.687 100.418 122.455 100.418 121.047C100.418 119.639 100.706 118.415 101.282 117.375C101.874 116.319 102.69 115.511 103.73 114.951C104.786 114.391 105.986 114.111 107.33 114.111C108.674 114.111 109.866 114.391 110.906 114.951C111.962 115.495 112.778 116.279 113.354 117.303C113.946 118.327 114.242 119.535 114.242 120.927ZM108.842 119.655C108.842 119.207 108.698 118.871 108.41 118.647C108.122 118.407 107.762 118.287 107.33 118.287C106.386 118.287 105.834 118.743 105.674 119.655H108.842ZM123.727 113.319C123.439 113.287 123.239 113.271 123.127 113.271C122.727 113.271 122.423 113.351 122.215 113.511C122.007 113.655 121.863 113.911 121.783 114.279H123.727V118.719H121.735V127.815H116.407V118.719H114.967V114.279H116.407C116.439 112.519 116.991 111.159 118.063 110.199C119.151 109.223 120.671 108.735 122.623 108.735C122.847 108.735 123.215 108.751 123.727 108.783V113.319Z"
        fill="#137974"
      />
      <g clipPath="url(#clip0_19_41)">
        <path
          d="M35.0201 0C27.2681 0.0015121 20.9617 6.30897 20.9617 14.0605V85.2238C20.9617 92.9758 27.2681 99.2833 35.0206 99.2843H101.382C103.121 99.2843 104.532 97.874 104.532 96.1341V85.2238V74.3135V24.9708V3.1502C104.532 1.41028 103.121 0 101.382 0H35.0201ZM35.0206 6.3004H98.2313V24.9708V71.1628H35.0201C32.1537 71.1633 29.4869 72.0277 27.2621 73.5061V14.0605C27.2621 9.78226 30.7429 6.30091 35.0206 6.3004ZM98.2313 92.9834H35.0211C30.7429 92.9829 27.2621 89.5015 27.2621 85.2233C27.2621 80.9451 30.7424 77.4637 35.0206 77.4632H98.2313V82.0731H48.6295C46.8896 82.0731 45.4793 83.4834 45.4793 85.2233C45.4793 86.9632 46.8896 88.3735 48.6295 88.3735H98.2313V92.9834Z"
          fill="#137974"
        />
        <path
          d="M50.1492 44.2036V56.131C50.1492 57.871 51.5595 59.2812 53.2994 59.2812H72.1935C73.9335 59.2812 75.3437 57.871 75.3437 56.131V44.2041C79.506 42.5333 82.3911 38.4516 82.3911 33.7863C82.3911 27.7707 77.6346 22.8458 71.6855 22.5746C69.5882 19.7994 66.3206 18.1436 62.747 18.1436C59.1719 18.1436 55.9047 19.7994 53.808 22.5746C47.8584 22.8458 43.1018 27.7712 43.1018 33.7863C43.1018 38.4521 45.9874 42.5333 50.1492 44.2036ZM54.3256 28.8634C54.564 28.8634 54.8064 28.881 55.0479 28.9163C56.4017 29.1164 57.7258 28.4194 58.3301 27.1935C59.1673 25.498 60.8604 24.444 62.748 24.444C64.6351 24.444 66.3281 25.498 67.1663 27.1946C67.7712 28.4204 69.1013 29.1154 70.4491 28.9163C70.689 28.881 70.9309 28.8634 71.1693 28.8634C73.8841 28.8634 76.0927 31.0721 76.0927 33.7868C76.0927 36.2591 74.2465 38.3579 71.7984 38.6683C70.2248 38.8679 69.0449 40.2072 69.0449 41.7933V52.9808H56.4496V42.0015C56.4496 41.998 56.4501 41.9939 56.4501 41.9909C56.5544 40.3311 55.3503 38.876 53.7006 38.6678C51.25 38.3589 49.4022 36.2606 49.4022 33.7863C49.4022 31.0716 51.6109 28.8634 54.3256 28.8634Z"
          fill="#137974"
        />
      </g>
      <defs>
        <clipPath id="clip0_19_41">
          <rect width="99.2838" height="99.2838" fill="white" transform="translate(13.1048)" />
        </clipPath>
      </defs>
    </svg>
  );
}
