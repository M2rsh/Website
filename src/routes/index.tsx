import { Title } from "solid-start";
import styles from "~/styles/index.module.scss";
import cat from "~/images/cat_ascii_smol.svg";
import { RiSystemArrowDownSLine } from "solid-icons/ri";
import HorizontalLine from "~/components/HorizontalLine";

export default function Index() {
  return (
    <div class={styles.main}>
      <Title>Hello World</Title>

      <div class={styles.icantcomeupwithaname}>
        <img src={cat} alt="cat" />
        <a href={'#'+styles.content} > {/*Temporary Solution*/}
          <RiSystemArrowDownSLine size={50} class={styles.arrowdown} />
        </a>
      </div>

      <div id={styles.content}>
        <h1>Hello world!</h1>
        <p class="stylized_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
          viverra orci sagittis eu volutpat odio facilisis mauris sit. Enim nunc
          faucibus a pellentesque sit amet porttitor eget dolor. Gravida rutrum
          quisque non tellus orci. Nam at lectus urna duis convallis. Auctor eu
          augue ut lectus arcu bibendum at varius vel. Viverra aliquet eget sit
          amet tellus cras adipiscing. Ipsum faucibus vitae aliquet nec
          ullamcorper. Gravida arcu ac tortor dignissim convallis aenean et
          tortor at. Lectus arcu bibendum at varius. Egestas congue quisque
          egestas diam in arcu cursus. Condimentum lacinia quis vel eros donec.
          Scelerisque fermentum dui faucibus in ornare quam. Lobortis mattis
          aliquam faucibus purus in massa tempor nec feugiat. Nisl rhoncus
          mattis rhoncus urna neque viverra justo nec. Pellentesque habitant
          morbi tristique senectus et netus et malesuada. Id velit ut tortor
          pretium viverra suspendisse potenti. Nisl nunc mi ipsum faucibus.
          Venenatis cras sed felis eget velit. Id semper risus in hendrerit
          gravida rutrum.
        </p>
        <p class="stylized_text">
          Suspendisse ultrices gravida dictum fusce ut placerat. Ut enim blandit
          volutpat maecenas. Venenatis urna cursus eget nunc scelerisque viverra
          mauris in aliquam. Sem et tortor consequat id porta nibh venenatis
          cras sed. Tristique senectus et netus et malesuada. Id neque aliquam
          vestibulum morbi blandit. Eu tincidunt tortor aliquam nulla facilisi.
          Morbi tincidunt augue interdum velit euismod. Mi sit amet mauris
          commodo quis imperdiet. Iaculis eu non diam phasellus vestibulum
          lorem. Curabitur vitae nunc sed velit dignissim. Fusce ut placerat
          orci nulla. Pellentesque elit eget gravida cum sociis natoque
          penatibus et magnis. Commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque eleifend. Nulla aliquet porttitor lacus luctus
          accumsan tortor posuere. Sollicitudin aliquam ultrices sagittis orci a
          scelerisque.
        </p>
        <p class="stylized_text">
          Magna eget est lorem ipsum dolor sit amet. Phasellus egestas tellus
          rutrum tellus pellentesque eu tincidunt tortor. Cursus euismod quis
          viverra nibh cras pulvinar mattis nunc sed. Aliquet nibh praesent
          tristique magna sit amet purus. Ultricies leo integer malesuada nunc
          vel risus. Ultrices tincidunt arcu non sodales neque. Commodo elit at
          imperdiet dui accumsan sit amet nulla facilisi. Mattis aliquam
          faucibus purus in massa. Eu ultrices vitae auctor eu augue. Vel
          fringilla est ullamcorper eget nulla facilisi. Molestie ac feugiat sed
          lectus. Egestas congue quisque egestas diam in arcu cursus euismod
          quis. Curabitur gravida arcu ac tortor dignissim convallis aenean. Mi
          ipsum faucibus vitae aliquet nec. Ornare massa eget egestas purus
          viverra accumsan in nisl. Tristique sollicitudin nibh sit amet commodo
          nulla facilisi nullam vehicula. Tempor nec feugiat nisl pretium fusce
          id. Odio aenean sed adipiscing diam.
        </p>
        <p class="stylized_text">
          Commodo ullamcorper a lacus vestibulum. Consectetur adipiscing elit ut
          aliquam purus sit amet. Vehicula ipsum a arcu cursus vitae congue
          mauris rhoncus. Non odio euismod lacinia at quis. Justo nec ultrices
          dui sapien eget mi proin sed. Scelerisque eu ultrices vitae auctor eu
          augue. Accumsan tortor posuere ac ut consequat semper viverra nam.
          Phasellus vestibulum lorem sed risus ultricies tristique nulla.
          Gravida rutrum quisque non tellus orci ac auctor augue. Viverra
          adipiscing at in tellus integer feugiat. Et molestie ac feugiat sed.
          Aenean et tortor at risus viverra adipiscing. Quisque egestas diam in
          arcu cursus euismod. Senectus et netus et malesuada fames ac turpis
          egestas maecenas. Eget lorem dolor sed viverra ipsum nunc aliquet.
        </p>
        <p class="stylized_text">
          Consectetur adipiscing elit duis tristique. At augue eget arcu dictum
          varius duis at consectetur lorem. Scelerisque eu ultrices vitae auctor
          eu augue ut lectus. Massa tincidunt dui ut ornare. Vel risus commodo
          viverra maecenas accumsan lacus vel. Libero justo laoreet sit amet
          cursus sit. At in tellus integer feugiat scelerisque varius. Leo duis
          ut diam quam nulla porttitor massa. Pharetra et ultrices neque ornare
          aenean euismod. A erat nam at lectus urna duis. A condimentum vitae
          sapien pellentesque habitant morbi tristique senectus et. Donec massa
          sapien faucibus et molestie ac feugiat sed lectus. Fringilla ut morbi
          tincidunt augue interdum. Lacus luctus accumsan tortor posuere ac ut
          consequat semper viverra.
        </p>
      </div>
      <HorizontalLine/>
    </div>
  );
}
