with import <nixpkgs> {};

mkShell {
  buildInputs = [
    nodejs-12_x
    yarn

    # for mozjpeg (transitive dependency of sharp)
    autoconf
    automake
    pkgconfig
    libpng
    libtool
    nasm
  ];

  GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR = "false";
}
