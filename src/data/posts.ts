export interface Post {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "A Review of Cars with Advanced Infotainment Systems",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
    detailedDescription:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nostrum
        esse cum animi beatae consequuntur possimus libero itaque amet
        consectetur porro aliquid harum eveniet officiis. Deleniti modi nam
        laudantium repellendus. Vel magni consequatur voluptatibus quod magnam
        nostrum officiis veniam eos rem voluptatem, animi natus est neque illo
        distinctio aliquam. Quos commodi minus porro aperiam nihil itaque
        reprehenderit dolore iusto saepe? A saepe aperiam porro laboriosam
        quibusdam nisi distinctio sed aliquid deserunt consectetur adipisci,
        quasi corporis molestias dolor? Ipsum voluptas aliquam cumque! Magnam
        vitae facilis quas eum nostrum excepturi accusantium mollitia.
        Voluptates magnam nisi tempora aliquid cum cumque id quo eligendi, illum
        at dolores fuga pariatur. Ex modi commodi eveniet omnis dolore minus
        doloribus labore animi porro, ipsum consequuntur nisi ipsam? Adipisci
        odit quibusdam similique magnam molestiae! Vero minus quidem aperiam
        sint fuga omnis fugit, ab voluptatibus, earum, delectus perferendis
        ipsum repellendus rem ducimus tempora pariatur aliquam. Fugit veniam
        distinctio assumenda. Quis, ad maiores fugiat consectetur iste excepturi
        aperiam omnis necessitatibus autem voluptatem quos impedit dicta. Odit
        quibusdam inventore voluptates quisquam repellendus eveniet, dignissimos
        harum asperiores facere ducimus maxime, nemo est. Voluptatum, repellat,
        fugiat labore quam eius possimus, nisi sequi hic commodi optio voluptas
        dolorum voluptatem ea magnam nobis. Odit quibusdam asperiores ad minus
        consequuntur rem? Numquam consequatur aperiam animi obcaecati! Placeat
        natus autem sint dolor cum, excepturi quod sunt illo? Soluta nesciunt ut
        tenetur! Esse veniam beatae modi voluptatibus totam? Possimus ex,
        nostrum natus commodi sit error voluptas quam corporis? Nostrum quas qui
        cumque eveniet dolorum sapiente, sunt natus accusantium dignissimos fuga
        vel voluptatem tempore dicta esse doloribus dolore blanditiis possimus
        ipsum nisi corporis tempora quis quibusdam. Molestias, cum voluptatum?
        Quibusdam facere odio pariatur ab porro rerum asperiores minima dolorum
        ullam fuga doloribus molestias sed nihil provident, corporis ipsa,
        consequuntur voluptatem soluta. Repellat cupiditate dolor a dolores
        sapiente distinctio ipsa. Sapiente quis sunt quas voluptatum cupiditate
        magnam labore ea praesentium voluptate, qui odio alias doloribus fuga.
        Voluptatem incidunt suscipit fugit nihil laborum officia nemo
        distinctio, magni a aperiam ducimus temporibus. Sit aliquam aperiam
        tenetur saepe facilis voluptas fugiat, eos recusandae nam dolore eius
        impedit corporis provident tempore maxime labore necessitatibus
        distinctio rerum ratione. Asperiores porro fuga eligendi quidem illum
        ipsum. Ipsa, autem quidem similique placeat fuga voluptate voluptatem
        iusto nulla nobis. Quam laudantium dolorem, omnis eius pariatur cumque
        nisi numquam quasi necessitatibus magni distinctio aspernatur! Saepe
        neque quae officia quis. Praesentium nostrum tempora similique, dolor
        numquam iusto veniam maiores omnis odio error soluta possimus
        accusantium, explicabo adipisci aliquam tenetur quae ex amet. Eum
        aspernatur veniam atque vel odio iure porro. Rerum deserunt animi
        laboriosam laudantium ipsam magni minus excepturi blanditiis quibusdam
        sed est error labore reprehenderit nulla nam, facere aliquid
        voluptatibus eum perferendis quam? Accusantium rem aut fugiat sint
        possimus!`,
    image: "/post-images/post1.jpg",
  },
  {
    id: "2",
    title: "A Review of Cars with Advanced Infotainment Systems",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
    detailedDescription:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nostrum
        esse cum animi beatae consequuntur possimus libero itaque amet
        consectetur porro aliquid harum eveniet officiis. Deleniti modi nam
        laudantium repellendus. Vel magni consequatur voluptatibus quod magnam
        nostrum officiis veniam eos rem voluptatem, animi natus est neque illo
        distinctio aliquam. Quos commodi minus porro aperiam nihil itaque
        reprehenderit dolore iusto saepe? A saepe aperiam porro laboriosam
        quibusdam nisi distinctio sed aliquid deserunt consectetur adipisci,
        quasi corporis molestias dolor? Ipsum voluptas aliquam cumque! Magnam
        vitae facilis quas eum nostrum excepturi accusantium mollitia.
        Voluptates magnam nisi tempora aliquid cum cumque id quo eligendi, illum
        at dolores fuga pariatur. Ex modi commodi eveniet omnis dolore minus
        doloribus labore animi porro, ipsum consequuntur nisi ipsam? Adipisci
        odit quibusdam similique magnam molestiae! Vero minus quidem aperiam
        sint fuga omnis fugit, ab voluptatibus, earum, delectus perferendis
        ipsum repellendus rem ducimus tempora pariatur aliquam. Fugit veniam
        distinctio assumenda. Quis, ad maiores fugiat consectetur iste excepturi
        aperiam omnis necessitatibus autem voluptatem quos impedit dicta. Odit
        quibusdam inventore voluptates quisquam repellendus eveniet, dignissimos
        harum asperiores facere ducimus maxime, nemo est. Voluptatum, repellat,
        fugiat labore quam eius possimus, nisi sequi hic commodi optio voluptas
        dolorum voluptatem ea magnam nobis. Odit quibusdam asperiores ad minus
        consequuntur rem? Numquam consequatur aperiam animi obcaecati! Placeat
        natus autem sint dolor cum, excepturi quod sunt illo? Soluta nesciunt ut
        tenetur! Esse veniam beatae modi voluptatibus totam? Possimus ex,
        nostrum natus commodi sit error voluptas quam corporis? Nostrum quas qui
        cumque eveniet dolorum sapiente, sunt natus accusantium dignissimos fuga
        vel voluptatem tempore dicta esse doloribus dolore blanditiis possimus
        ipsum nisi corporis tempora quis quibusdam. Molestias, cum voluptatum?
        Quibusdam facere odio pariatur ab porro rerum asperiores minima dolorum
        ullam fuga doloribus molestias sed nihil provident, corporis ipsa,
        consequuntur voluptatem soluta. Repellat cupiditate dolor a dolores
        sapiente distinctio ipsa. Sapiente quis sunt quas voluptatum cupiditate
        magnam labore ea praesentium voluptate, qui odio alias doloribus fuga.
        Voluptatem incidunt suscipit fugit nihil laborum officia nemo
        distinctio, magni a aperiam ducimus temporibus. Sit aliquam aperiam
        tenetur saepe facilis voluptas fugiat, eos recusandae nam dolore eius
        impedit corporis provident tempore maxime labore necessitatibus
        distinctio rerum ratione. Asperiores porro fuga eligendi quidem illum
        ipsum. Ipsa, autem quidem similique placeat fuga voluptate voluptatem
        iusto nulla nobis. Quam laudantium dolorem, omnis eius pariatur cumque
        nisi numquam quasi necessitatibus magni distinctio aspernatur! Saepe
        neque quae officia quis. Praesentium nostrum tempora similique, dolor
        numquam iusto veniam maiores omnis odio error soluta possimus
        accusantium, explicabo adipisci aliquam tenetur quae ex amet. Eum
        aspernatur veniam atque vel odio iure porro. Rerum deserunt animi
        laboriosam laudantium ipsam magni minus excepturi blanditiis quibusdam
        sed est error labore reprehenderit nulla nam, facere aliquid
        voluptatibus eum perferendis quam? Accusantium rem aut fugiat sint
        possimus!`,
    image: "/post-images/post2.jpg",
  },
  {
    id: "3",
    title: "A Review of Cars with Advanced Infotainment Systems",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
    detailedDescription:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nostrum
        esse cum animi beatae consequuntur possimus libero itaque amet
        consectetur porro aliquid harum eveniet officiis. Deleniti modi nam
        laudantium repellendus. Vel magni consequatur voluptatibus quod magnam
        nostrum officiis veniam eos rem voluptatem, animi natus est neque illo
        distinctio aliquam. Quos commodi minus porro aperiam nihil itaque
        reprehenderit dolore iusto saepe? A saepe aperiam porro laboriosam
        quibusdam nisi distinctio sed aliquid deserunt consectetur adipisci,
        quasi corporis molestias dolor? Ipsum voluptas aliquam cumque! Magnam
        vitae facilis quas eum nostrum excepturi accusantium mollitia.
        Voluptates magnam nisi tempora aliquid cum cumque id quo eligendi, illum
        at dolores fuga pariatur. Ex modi commodi eveniet omnis dolore minus
        doloribus labore animi porro, ipsum consequuntur nisi ipsam? Adipisci
        odit quibusdam similique magnam molestiae! Vero minus quidem aperiam
        sint fuga omnis fugit, ab voluptatibus, earum, delectus perferendis
        ipsum repellendus rem ducimus tempora pariatur aliquam. Fugit veniam
        distinctio assumenda. Quis, ad maiores fugiat consectetur iste excepturi
        aperiam omnis necessitatibus autem voluptatem quos impedit dicta. Odit
        quibusdam inventore voluptates quisquam repellendus eveniet, dignissimos
        harum asperiores facere ducimus maxime, nemo est. Voluptatum, repellat,
        fugiat labore quam eius possimus, nisi sequi hic commodi optio voluptas
        dolorum voluptatem ea magnam nobis. Odit quibusdam asperiores ad minus
        consequuntur rem? Numquam consequatur aperiam animi obcaecati! Placeat
        natus autem sint dolor cum, excepturi quod sunt illo? Soluta nesciunt ut
        tenetur! Esse veniam beatae modi voluptatibus totam? Possimus ex,
        nostrum natus commodi sit error voluptas quam corporis? Nostrum quas qui
        cumque eveniet dolorum sapiente, sunt natus accusantium dignissimos fuga
        vel voluptatem tempore dicta esse doloribus dolore blanditiis possimus
        ipsum nisi corporis tempora quis quibusdam. Molestias, cum voluptatum?
        Quibusdam facere odio pariatur ab porro rerum asperiores minima dolorum
        ullam fuga doloribus molestias sed nihil provident, corporis ipsa,
        consequuntur voluptatem soluta. Repellat cupiditate dolor a dolores
        sapiente distinctio ipsa. Sapiente quis sunt quas voluptatum cupiditate
        magnam labore ea praesentium voluptate, qui odio alias doloribus fuga.
        Voluptatem incidunt suscipit fugit nihil laborum officia nemo
        distinctio, magni a aperiam ducimus temporibus. Sit aliquam aperiam
        tenetur saepe facilis voluptas fugiat, eos recusandae nam dolore eius
        impedit corporis provident tempore maxime labore necessitatibus
        distinctio rerum ratione. Asperiores porro fuga eligendi quidem illum
        ipsum. Ipsa, autem quidem similique placeat fuga voluptate voluptatem
        iusto nulla nobis. Quam laudantium dolorem, omnis eius pariatur cumque
        nisi numquam quasi necessitatibus magni distinctio aspernatur! Saepe
        neque quae officia quis. Praesentium nostrum tempora similique, dolor
        numquam iusto veniam maiores omnis odio error soluta possimus
        accusantium, explicabo adipisci aliquam tenetur quae ex amet. Eum
        aspernatur veniam atque vel odio iure porro. Rerum deserunt animi
        laboriosam laudantium ipsam magni minus excepturi blanditiis quibusdam
        sed est error labore reprehenderit nulla nam, facere aliquid
        voluptatibus eum perferendis quam? Accusantium rem aut fugiat sint
        possimus!`,
    image: "/post-images/post3.jpg",
  },
  {
    id: "4",
    title: "A Review of Cars with Advanced Infotainment Systems",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
    detailedDescription:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nostrum
        esse cum animi beatae consequuntur possimus libero itaque amet
        consectetur porro aliquid harum eveniet officiis. Deleniti modi nam
        laudantium repellendus. Vel magni consequatur voluptatibus quod magnam
        nostrum officiis veniam eos rem voluptatem, animi natus est neque illo
        distinctio aliquam. Quos commodi minus porro aperiam nihil itaque
        reprehenderit dolore iusto saepe? A saepe aperiam porro laboriosam
        quibusdam nisi distinctio sed aliquid deserunt consectetur adipisci,
        quasi corporis molestias dolor? Ipsum voluptas aliquam cumque! Magnam
        vitae facilis quas eum nostrum excepturi accusantium mollitia.
        Voluptates magnam nisi tempora aliquid cum cumque id quo eligendi, illum
        at dolores fuga pariatur. Ex modi commodi eveniet omnis dolore minus
        doloribus labore animi porro, ipsum consequuntur nisi ipsam? Adipisci
        odit quibusdam similique magnam molestiae! Vero minus quidem aperiam
        sint fuga omnis fugit, ab voluptatibus, earum, delectus perferendis
        ipsum repellendus rem ducimus tempora pariatur aliquam. Fugit veniam
        distinctio assumenda. Quis, ad maiores fugiat consectetur iste excepturi
        aperiam omnis necessitatibus autem voluptatem quos impedit dicta. Odit
        quibusdam inventore voluptates quisquam repellendus eveniet, dignissimos
        harum asperiores facere ducimus maxime, nemo est. Voluptatum, repellat,
        fugiat labore quam eius possimus, nisi sequi hic commodi optio voluptas
        dolorum voluptatem ea magnam nobis. Odit quibusdam asperiores ad minus
        consequuntur rem? Numquam consequatur aperiam animi obcaecati! Placeat
        natus autem sint dolor cum, excepturi quod sunt illo? Soluta nesciunt ut
        tenetur! Esse veniam beatae modi voluptatibus totam? Possimus ex,
        nostrum natus commodi sit error voluptas quam corporis? Nostrum quas qui
        cumque eveniet dolorum sapiente, sunt natus accusantium dignissimos fuga
        vel voluptatem tempore dicta esse doloribus dolore blanditiis possimus
        ipsum nisi corporis tempora quis quibusdam. Molestias, cum voluptatum?
        Quibusdam facere odio pariatur ab porro rerum asperiores minima dolorum
        ullam fuga doloribus molestias sed nihil provident, corporis ipsa,
        consequuntur voluptatem soluta. Repellat cupiditate dolor a dolores
        sapiente distinctio ipsa. Sapiente quis sunt quas voluptatum cupiditate
        magnam labore ea praesentium voluptate, qui odio alias doloribus fuga.
        Voluptatem incidunt suscipit fugit nihil laborum officia nemo
        distinctio, magni a aperiam ducimus temporibus. Sit aliquam aperiam
        tenetur saepe facilis voluptas fugiat, eos recusandae nam dolore eius
        impedit corporis provident tempore maxime labore necessitatibus
        distinctio rerum ratione. Asperiores porro fuga eligendi quidem illum
        ipsum. Ipsa, autem quidem similique placeat fuga voluptate voluptatem
        iusto nulla nobis. Quam laudantium dolorem, omnis eius pariatur cumque
        nisi numquam quasi necessitatibus magni distinctio aspernatur! Saepe
        neque quae officia quis. Praesentium nostrum tempora similique, dolor
        numquam iusto veniam maiores omnis odio error soluta possimus
        accusantium, explicabo adipisci aliquam tenetur quae ex amet. Eum
        aspernatur veniam atque vel odio iure porro. Rerum deserunt animi
        laboriosam laudantium ipsam magni minus excepturi blanditiis quibusdam
        sed est error labore reprehenderit nulla nam, facere aliquid
        voluptatibus eum perferendis quam? Accusantium rem aut fugiat sint
        possimus!`,
    image: "/post-images/post4.jpg",
  },
  {
    id: "5",
    title: "A Review of Cars with Advanced Infotainment Systems",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
    detailedDescription:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nostrum
        esse cum animi beatae consequuntur possimus libero itaque amet
        consectetur porro aliquid harum eveniet officiis. Deleniti modi nam
        laudantium repellendus. Vel magni consequatur voluptatibus quod magnam
        nostrum officiis veniam eos rem voluptatem, animi natus est neque illo
        distinctio aliquam. Quos commodi minus porro aperiam nihil itaque
        reprehenderit dolore iusto saepe? A saepe aperiam porro laboriosam
        quibusdam nisi distinctio sed aliquid deserunt consectetur adipisci,
        quasi corporis molestias dolor? Ipsum voluptas aliquam cumque! Magnam
        vitae facilis quas eum nostrum excepturi accusantium mollitia.
        Voluptates magnam nisi tempora aliquid cum cumque id quo eligendi, illum
        at dolores fuga pariatur. Ex modi commodi eveniet omnis dolore minus
        doloribus labore animi porro, ipsum consequuntur nisi ipsam? Adipisci
        odit quibusdam similique magnam molestiae! Vero minus quidem aperiam
        sint fuga omnis fugit, ab voluptatibus, earum, delectus perferendis
        ipsum repellendus rem ducimus tempora pariatur aliquam. Fugit veniam
        distinctio assumenda. Quis, ad maiores fugiat consectetur iste excepturi
        aperiam omnis necessitatibus autem voluptatem quos impedit dicta. Odit
        quibusdam inventore voluptates quisquam repellendus eveniet, dignissimos
        harum asperiores facere ducimus maxime, nemo est. Voluptatum, repellat,
        fugiat labore quam eius possimus, nisi sequi hic commodi optio voluptas
        dolorum voluptatem ea magnam nobis. Odit quibusdam asperiores ad minus
        consequuntur rem? Numquam consequatur aperiam animi obcaecati! Placeat
        natus autem sint dolor cum, excepturi quod sunt illo? Soluta nesciunt ut
        tenetur! Esse veniam beatae modi voluptatibus totam? Possimus ex,
        nostrum natus commodi sit error voluptas quam corporis? Nostrum quas qui
        cumque eveniet dolorum sapiente, sunt natus accusantium dignissimos fuga
        vel voluptatem tempore dicta esse doloribus dolore blanditiis possimus
        ipsum nisi corporis tempora quis quibusdam. Molestias, cum voluptatum?
        Quibusdam facere odio pariatur ab porro rerum asperiores minima dolorum
        ullam fuga doloribus molestias sed nihil provident, corporis ipsa,
        consequuntur voluptatem soluta. Repellat cupiditate dolor a dolores
        sapiente distinctio ipsa. Sapiente quis sunt quas voluptatum cupiditate
        magnam labore ea praesentium voluptate, qui odio alias doloribus fuga.
        Voluptatem incidunt suscipit fugit nihil laborum officia nemo
        distinctio, magni a aperiam ducimus temporibus. Sit aliquam aperiam
        tenetur saepe facilis voluptas fugiat, eos recusandae nam dolore eius
        impedit corporis provident tempore maxime labore necessitatibus
        distinctio rerum ratione. Asperiores porro fuga eligendi quidem illum
        ipsum. Ipsa, autem quidem similique placeat fuga voluptate voluptatem
        iusto nulla nobis. Quam laudantium dolorem, omnis eius pariatur cumque
        nisi numquam quasi necessitatibus magni distinctio aspernatur! Saepe
        neque quae officia quis. Praesentium nostrum tempora similique, dolor
        numquam iusto veniam maiores omnis odio error soluta possimus
        accusantium, explicabo adipisci aliquam tenetur quae ex amet. Eum
        aspernatur veniam atque vel odio iure porro. Rerum deserunt animi
        laboriosam laudantium ipsam magni minus excepturi blanditiis quibusdam
        sed est error labore reprehenderit nulla nam, facere aliquid
        voluptatibus eum perferendis quam? Accusantium rem aut fugiat sint
        possimus!`,
    image: "/post-images/post5.jpg",
  },
  {
    id: "6",
    title: "A Review of Cars with Advanced Infotainment Systems",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
    detailedDescription:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nostrum
        esse cum animi beatae consequuntur possimus libero itaque amet
        consectetur porro aliquid harum eveniet officiis. Deleniti modi nam
        laudantium repellendus. Vel magni consequatur voluptatibus quod magnam
        nostrum officiis veniam eos rem voluptatem, animi natus est neque illo
        distinctio aliquam. Quos commodi minus porro aperiam nihil itaque
        reprehenderit dolore iusto saepe? A saepe aperiam porro laboriosam
        quibusdam nisi distinctio sed aliquid deserunt consectetur adipisci,
        quasi corporis molestias dolor? Ipsum voluptas aliquam cumque! Magnam
        vitae facilis quas eum nostrum excepturi accusantium mollitia.
        Voluptates magnam nisi tempora aliquid cum cumque id quo eligendi, illum
        at dolores fuga pariatur. Ex modi commodi eveniet omnis dolore minus
        doloribus labore animi porro, ipsum consequuntur nisi ipsam? Adipisci
        odit quibusdam similique magnam molestiae! Vero minus quidem aperiam
        sint fuga omnis fugit, ab voluptatibus, earum, delectus perferendis
        ipsum repellendus rem ducimus tempora pariatur aliquam. Fugit veniam
        distinctio assumenda. Quis, ad maiores fugiat consectetur iste excepturi
        aperiam omnis necessitatibus autem voluptatem quos impedit dicta. Odit
        quibusdam inventore voluptates quisquam repellendus eveniet, dignissimos
        harum asperiores facere ducimus maxime, nemo est. Voluptatum, repellat,
        fugiat labore quam eius possimus, nisi sequi hic commodi optio voluptas
        dolorum voluptatem ea magnam nobis. Odit quibusdam asperiores ad minus
        consequuntur rem? Numquam consequatur aperiam animi obcaecati! Placeat
        natus autem sint dolor cum, excepturi quod sunt illo? Soluta nesciunt ut
        tenetur! Esse veniam beatae modi voluptatibus totam? Possimus ex,
        nostrum natus commodi sit error voluptas quam corporis? Nostrum quas qui
        cumque eveniet dolorum sapiente, sunt natus accusantium dignissimos fuga
        vel voluptatem tempore dicta esse doloribus dolore blanditiis possimus
        ipsum nisi corporis tempora quis quibusdam. Molestias, cum voluptatum?
        Quibusdam facere odio pariatur ab porro rerum asperiores minima dolorum
        ullam fuga doloribus molestias sed nihil provident, corporis ipsa,
        consequuntur voluptatem soluta. Repellat cupiditate dolor a dolores
        sapiente distinctio ipsa. Sapiente quis sunt quas voluptatum cupiditate
        magnam labore ea praesentium voluptate, qui odio alias doloribus fuga.
        Voluptatem incidunt suscipit fugit nihil laborum officia nemo
        distinctio, magni a aperiam ducimus temporibus. Sit aliquam aperiam
        tenetur saepe facilis voluptas fugiat, eos recusandae nam dolore eius
        impedit corporis provident tempore maxime labore necessitatibus
        distinctio rerum ratione. Asperiores porro fuga eligendi quidem illum
        ipsum. Ipsa, autem quidem similique placeat fuga voluptate voluptatem
        iusto nulla nobis. Quam laudantium dolorem, omnis eius pariatur cumque
        nisi numquam quasi necessitatibus magni distinctio aspernatur! Saepe
        neque quae officia quis. Praesentium nostrum tempora similique, dolor
        numquam iusto veniam maiores omnis odio error soluta possimus
        accusantium, explicabo adipisci aliquam tenetur quae ex amet. Eum
        aspernatur veniam atque vel odio iure porro. Rerum deserunt animi
        laboriosam laudantium ipsam magni minus excepturi blanditiis quibusdam
        sed est error labore reprehenderit nulla nam, facere aliquid
        voluptatibus eum perferendis quam? Accusantium rem aut fugiat sint
        possimus!`,
    image: "/post-images/post6.jpg",
  },
  {
    id: "7",
    title: "A Review of Cars with Advanced Infotainment Systems",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
    detailedDescription:
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nostrum
        esse cum animi beatae consequuntur possimus libero itaque amet
        consectetur porro aliquid harum eveniet officiis. Deleniti modi nam
        laudantium repellendus. Vel magni consequatur voluptatibus quod magnam
        nostrum officiis veniam eos rem voluptatem, animi natus est neque illo
        distinctio aliquam. Quos commodi minus porro aperiam nihil itaque
        reprehenderit dolore iusto saepe? A saepe aperiam porro laboriosam
        quibusdam nisi distinctio sed aliquid deserunt consectetur adipisci,
        quasi corporis molestias dolor? Ipsum voluptas aliquam cumque! Magnam
        vitae facilis quas eum nostrum excepturi accusantium mollitia.
        Voluptates magnam nisi tempora aliquid cum cumque id quo eligendi, illum
        at dolores fuga pariatur. Ex modi commodi eveniet omnis dolore minus
        doloribus labore animi porro, ipsum consequuntur nisi ipsam? Adipisci
        odit quibusdam similique magnam molestiae! Vero minus quidem aperiam
        sint fuga omnis fugit, ab voluptatibus, earum, delectus perferendis
        ipsum repellendus rem ducimus tempora pariatur aliquam. Fugit veniam
        distinctio assumenda. Quis, ad maiores fugiat consectetur iste excepturi
        aperiam omnis necessitatibus autem voluptatem quos impedit dicta. Odit
        quibusdam inventore voluptates quisquam repellendus eveniet, dignissimos
        harum asperiores facere ducimus maxime, nemo est. Voluptatum, repellat,
        fugiat labore quam eius possimus, nisi sequi hic commodi optio voluptas
        dolorum voluptatem ea magnam nobis. Odit quibusdam asperiores ad minus
        consequuntur rem? Numquam consequatur aperiam animi obcaecati! Placeat
        natus autem sint dolor cum, excepturi quod sunt illo? Soluta nesciunt ut
        tenetur! Esse veniam beatae modi voluptatibus totam? Possimus ex,
        nostrum natus commodi sit error voluptas quam corporis? Nostrum quas qui
        cumque eveniet dolorum sapiente, sunt natus accusantium dignissimos fuga
        vel voluptatem tempore dicta esse doloribus dolore blanditiis possimus
        ipsum nisi corporis tempora quis quibusdam. Molestias, cum voluptatum?
        Quibusdam facere odio pariatur ab porro rerum asperiores minima dolorum
        ullam fuga doloribus molestias sed nihil provident, corporis ipsa,
        consequuntur voluptatem soluta. Repellat cupiditate dolor a dolores
        sapiente distinctio ipsa. Sapiente quis sunt quas voluptatum cupiditate
        magnam labore ea praesentium voluptate, qui odio alias doloribus fuga.
        Voluptatem incidunt suscipit fugit nihil laborum officia nemo
        distinctio, magni a aperiam ducimus temporibus. Sit aliquam aperiam
        tenetur saepe facilis voluptas fugiat, eos recusandae nam dolore eius
        impedit corporis provident tempore maxime labore necessitatibus
        distinctio rerum ratione. Asperiores porro fuga eligendi quidem illum
        ipsum. Ipsa, autem quidem similique placeat fuga voluptate voluptatem
        iusto nulla nobis. Quam laudantium dolorem, omnis eius pariatur cumque
        nisi numquam quasi necessitatibus magni distinctio aspernatur! Saepe
        neque quae officia quis. Praesentium nostrum tempora similique, dolor
        numquam iusto veniam maiores omnis odio error soluta possimus
        accusantium, explicabo adipisci aliquam tenetur quae ex amet. Eum
        aspernatur veniam atque vel odio iure porro. Rerum deserunt animi
        laboriosam laudantium ipsam magni minus excepturi blanditiis quibusdam
        sed est error labore reprehenderit nulla nam, facere aliquid
        voluptatibus eum perferendis quam? Accusantium rem aut fugiat sint
        possimus!`,
    image: "/post-images/post7.jpg",
  },
];
