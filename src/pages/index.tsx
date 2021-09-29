import { Layout, Button, BottomBar } from '@/components'

import { NextPage } from 'next'

const Home: NextPage = () => (
  <Layout>
    <div className="h-screen w-full flex flex-col hero">
      <div className="text-center m-auto">
        <svg
          className="mx-auto"
          width="434"
          height="120"
          viewBox="0 0 482 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.7523 100H57.0683L98.7955 0.505996H76.7862L49.4103 70.6342L22.0947 0.505996H0.0250897L41.7523 100ZM108.157 25.4096C111.172 25.4096 113.745 24.3243 115.876 22.1535C118.006 19.9827 119.072 17.3898 119.072 14.3749C119.072 11.3599 118.006 8.78711 115.876 6.65653C113.745 4.52596 111.172 3.46067 108.157 3.46067C105.102 3.46067 102.489 4.52596 100.318 6.65653C98.1878 8.78711 97.1226 11.3599 97.1226 14.3749C97.1226 17.43 98.1878 20.043 100.318 22.2138C102.489 24.3444 105.102 25.4096 108.157 25.4096ZM98.8712 100H117.383V38.2534H98.8712V100ZM157.142 133.165C165.302 133.165 172.035 131.798 177.342 129.064C182.688 126.371 186.668 122.652 189.281 117.909C191.934 113.165 193.261 107.759 193.261 101.688V38.2534H174.749V45.7908C172.297 42.8161 169.222 40.5046 165.523 38.8564C161.825 37.168 157.805 36.3238 153.463 36.3238C147.514 36.3238 142.207 37.7509 137.544 40.6051C132.921 43.4593 129.263 47.3586 126.57 52.3032C123.917 57.2477 122.59 62.8556 122.59 69.1267C122.59 75.5184 123.957 81.1866 126.69 86.1311C129.464 91.0757 133.142 94.955 137.725 97.7689C142.308 100.543 147.393 101.93 152.981 101.93C157.282 101.93 161.302 101.045 165.041 99.2764C168.82 97.5076 172.056 95.0353 174.749 91.8596V100.543C174.749 105.527 173.101 109.547 169.804 112.603C166.548 115.658 162.307 117.185 157.081 117.185C153.222 117.185 149.644 116.341 146.348 114.653C143.052 112.964 140.559 110.693 138.871 107.839L123.796 115.195C126.409 121.105 130.529 125.567 136.157 128.582C141.825 131.637 148.82 133.165 157.142 133.165ZM158.528 86.1914C153.704 86.1914 149.745 84.6036 146.649 81.4278C143.594 78.2118 142.067 74.1517 142.067 69.2473C142.067 64.2626 143.634 60.1622 146.77 56.9462C149.946 53.6901 153.905 52.062 158.649 52.062C163.393 52.062 167.332 53.6901 170.468 56.9462C173.603 60.1622 175.171 64.2626 175.171 69.2473C175.171 74.1517 173.603 78.2118 170.468 81.4278C167.372 84.6036 163.393 86.1914 158.528 86.1914ZM203.241 100H221.753V63.4586C221.753 59.8808 222.939 56.8859 225.31 54.474C227.682 52.0218 230.918 50.7957 235.019 50.7957C239.039 50.7957 242.194 52.0419 244.486 54.5343C246.817 56.9864 247.983 60.4235 247.983 64.8455V100H266.495V60.926C266.495 56.0216 265.47 51.7404 263.42 48.0822C261.369 44.3839 258.535 41.5096 254.917 39.4594C251.34 37.369 247.179 36.3238 242.435 36.3238C238.174 36.3238 234.255 37.1479 230.677 38.7961C227.099 40.4041 224.124 42.5146 221.753 45.1276V38.2534H203.241V100ZM304.966 101.93C311.479 101.93 317.388 100.523 322.694 97.7086C328.001 94.8947 332.101 90.9953 334.995 86.0105L321.669 79.3173C319.378 82.0509 316.986 84.0408 314.494 85.2869C312.041 86.5331 309.207 87.1562 305.991 87.1562C300.846 87.1562 296.705 85.7291 293.57 82.875C290.434 80.0208 288.866 76.242 288.866 71.5387H336.201C336.322 70.4935 336.382 69.79 336.382 69.4282C336.422 69.0262 336.443 68.5639 336.443 68.0413C336.443 61.73 335.076 56.2025 332.342 51.459C329.649 46.7154 325.87 43.0171 321.006 40.3639C316.182 37.6705 310.554 36.3238 304.122 36.3238C297.69 36.3238 291.881 37.7911 286.696 40.7257C281.55 43.6201 277.45 47.5395 274.394 52.4841C271.339 57.4286 269.812 62.9762 269.812 69.1267C269.812 75.3576 271.339 80.9454 274.394 85.8899C277.49 90.8345 281.691 94.754 286.997 97.6483C292.303 100.502 298.293 101.93 304.966 101.93ZM289.53 61.2878C289.932 57.71 291.419 54.8961 293.992 52.8459C296.565 50.7957 299.861 49.7706 303.881 49.7706C307.7 49.7706 310.876 50.7957 313.408 52.8459C315.981 54.8961 317.589 57.71 318.232 61.2878H289.53ZM362.048 101.93C364.54 101.93 367.072 101.608 369.645 100.965C372.258 100.322 374.61 99.4372 376.7 98.3116L372.057 83.478C370.329 84.7644 368.479 85.4075 366.51 85.4075C362.892 85.4075 361.083 83.0358 361.083 78.2922V52.3032H374.65V38.2534H361.083V15.0984H342.571V38.2534H334.31V52.3032H342.571V79.6188C342.571 86.6537 344.279 92.141 347.696 96.0805C351.153 99.9799 355.937 101.93 362.048 101.93ZM401.483 101.93C403.975 101.93 406.508 101.608 409.08 100.965C411.693 100.322 414.045 99.4372 416.135 98.3116L411.492 83.478C409.764 84.7644 407.915 85.4075 405.945 85.4075C402.327 85.4075 400.518 83.0358 400.518 78.2922V52.3032H414.085V38.2534H400.518V15.0984H382.006V38.2534H373.745V52.3032H382.006V79.6188C382.006 86.6537 383.714 92.141 387.131 96.0805C390.589 99.9799 395.372 101.93 401.483 101.93ZM450.006 101.93C456.519 101.93 462.428 100.523 467.734 97.7086C473.041 94.8947 477.141 90.9953 480.035 86.0105L466.709 79.3173C464.418 82.0509 462.026 84.0408 459.533 85.2869C457.081 86.5331 454.247 87.1562 451.031 87.1562C445.886 87.1562 441.745 85.7291 438.61 82.875C435.474 80.0208 433.906 76.242 433.906 71.5387H481.241C481.362 70.4935 481.422 69.79 481.422 69.4282C481.462 69.0262 481.482 68.5639 481.482 68.0413C481.482 61.73 480.116 56.2025 477.382 51.459C474.689 46.7154 470.91 43.0171 466.046 40.3639C461.222 37.6705 455.594 36.3238 449.162 36.3238C442.73 36.3238 436.921 37.7911 431.735 40.7257C426.59 43.6201 422.49 47.5395 419.434 52.4841C416.379 57.4286 414.852 62.9762 414.852 69.1267C414.852 75.3576 416.379 80.9454 419.434 85.8899C422.53 90.8345 426.731 94.754 432.037 97.6483C437.343 100.502 443.333 101.93 450.006 101.93ZM434.57 61.2878C434.972 57.71 436.459 54.8961 439.032 52.8459C441.604 50.7957 444.901 49.7706 448.921 49.7706C452.74 49.7706 455.916 50.7957 458.448 52.8459C461.021 54.8961 462.629 57.71 463.272 61.2878H434.57Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-247.5"
              y1="64.0521"
              x2="-177.672"
              y2="316.983"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BE58CB" />
              <stop offset="1" stopColor="#F10E5A" />
              <stop offset="1" stopColor="#F10E5A" />
            </linearGradient>
          </defs>
        </svg>

        <p className="text-3xl font-semibold pt-4">
          Make your streams more virtual.
        </p>
        <div className="pt-12">
          <p className="text-subtle">Free and Open Source</p>
          <Button>Download</Button>
        </div>
      </div>
      <div className="bottom-0 mx-auto">
        <p className="text-subtle text-xl">Learn more</p>
        <svg
          className="mx-auto mb-12 mt-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 9L12 17L20 9"
            stroke="#777777"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <BottomBar />
    </div>
  </Layout>
)

export default Home