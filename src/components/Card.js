import React from "react";

function Card(props) {
  return (
    <div className="border-yellow-500 rounded-2xl border-2  bg-white mx-2 mt-5 md:mt-16 md:mx-28">
      <div className="flex flex-row md:mx-12 mx-5 mt-3 md:mt-10 items-center">
        <div className="text-black font-roboto text-5xl font-semibold md:text-6xl tracking-tighter md:tracking-wider ">
          {props.name}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-11 w-11 md:h-14 md:w-14 text-red-700 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>
      </div>
      <div className="mx-5 mt-2 text-justify md:mx-12">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        maiores ipsum voluptatum, nam et cumque perspiciatis ipsa placeat quo
        accusamus deleniti inventore! Debitis autem, mollitia libero sit et
        eaque rerum voluptatem nulla eum facere exercitationem tempora dolores
        odit temporibus porro repellat accusantium, doloremque ipsum deserunt
        magni asperiores voluptatum ducimus! Recusandae eos magni commodi nobis
        explicabo amet, molestias deleniti fugiat in, modi repellat nemo veniam
        voluptate aut ea! Omnis unde numquam porro necessitatibus debitis sed!
        Accusamus eveniet voluptate, repellendus iste delectus facilis, veniam
        blanditiis deserunt dicta tenetur tempora quia labore quisquam commodi
        eius odit in nam laboriosam vitae corporis officiis modi dolorem. Sunt
        ipsam, quo, ullam adipisci explicabo eligendi perspiciatis dolorum
        magnam aliquam quam, nisi illo! Accusamus voluptates corporis nam magnam
        rem maxime! Perspiciatis, at aspernatur? Quam reiciendis architecto vero
        ex expedita earum aperiam reprehenderit est! Ratione autem aspernatur
        officia quidem reprehenderit voluptatem saepe repellat, tenetur labore
        itaque, voluptates incidunt odio quae exercitationem maiores iusto error
        delectus earum excepturi illo? Vero nam quibusdam sunt, nostrum quae
        iusto quam quos voluptatibus blanditiis provident quas aliquid
        perferendis obcaecati exercitationem aspernatur rem incidunt, animi
        harum atque at ducimus iste? Ex officiis illo, magni itaque ea odit nemo
        ratione quia, accusamus, quis repellat! Distinctio illum aperiam ratione
        perspiciatis libero quam culpa expedita, laboriosam error qui blanditiis
        animi velit, eaque nemo atque iste vero perferendis a ullam excepturi!
        Voluptatem non dicta minima eum consequuntur vitae dignissimos, rerum
        exercitationem quibusdam quaerat nesciunt aut, ab voluptates explicabo
        eos id porro alias! Accusamus voluptate nobis laudantium voluptatem, eos
        aperiam neque earum ex cupiditate recusandae aut omnis, vel, vero hic
        laboriosam reprehenderit fuga nulla. Libero voluptates explicabo vero
        nihil ab. Fuga eveniet aperiam qui delectus, repudiandae adipisci
        assumenda maxime laboriosam. Distinctio iste voluptas beatae accusamus
        accusantium veniam laboriosam quae, perferendis et temporibus! Optio
        nulla cumque quas quasi magni corrupti, nemo sed a rerum perferendis
        repellat eius sapiente in doloribus harum ipsum adipisci possimus labore
        odit impedit temporibus magnam vel. Quam velit voluptatem sequi
        cupiditate consequatur fugiat atque aut laudantium? Aliquam nostrum,
        fugit dolor beatae est iste inventore. Voluptatum earum expedita
        possimus pariatur quisquam? Deleniti quasi molestias quod culpa
        doloribus eaque consequuntur dicta, harum alias. Quia neque magnam autem
        consequatur dolore quam eius quisquam earum tenetur dolorum, omnis quod
        cum incidunt quae iure sunt doloribus quidem nihil nam itaque sint
        deserunt. Excepturi ipsum eaque aliquid sunt odit corporis eligendi
        consectetur fugiat voluptas sit praesentium molestiae tenetur itaque
        numquam suscipit dicta impedit, quis deserunt hic laboriosam non iure
        facilis vel! Inventore suscipit autem et reiciendis magni aspernatur
        sapiente dolorum vitae maiores, ut recusandae aperiam beatae fugiat.
        Similique distinctio mollitia ex, quidem dolore asperiores non, debitis
        perferendis consequatur, fugit necessitatibus dolores vitae nesciunt
        officiis explicabo facilis deserunt porro culpa. Deserunt quis
        explicabo, eius voluptatem adipisci at nam, error saepe fuga odit culpa
        quia. Blanditiis animi praesentium cum, eum fugiat tempore? Quam natus
        ipsum expedita odio quo labore, fugit omnis eligendi possimus recusandae
        laboriosam laudantium unde quibusdam, voluptatibus temporibus dicta
        obcaecati commodi voluptas praesentium amet! Officiis distinctio
        architecto eius repudiandae quam minima fugiat doloremque.
      </div>
    </div>
  );
}

export default Card;
