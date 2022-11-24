const sharp = require('sharp')

const compressImage = async () => {
  try {
    sharp(`${__dirname}/public/images/01.jpg`)
      .resize(500)
      .toFile(`${__dirname}/public/image-compress/01-compress.jpg`)
  } catch (error) {
    console.log(error)
  }
}

compressImage()

// const sharp = require('sharp')
//   // Convert any input to very high quality JPEG output
//   (async () => {
//     sharp('../public/images/01.jpg')
//       .rotate(45)
//       .resize(500)
//       .toFile('./result.png')
//       .then(() => console.log('保存完成'));
//   })()
