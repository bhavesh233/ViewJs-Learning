<template>
  <div class="bottom" >
    <footer class="bg-light text-center text-white" >
      <!-- Grid container -->
      <div class="container p-4 pb-0" >
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a
            class="btn btn-primary btn-floating m-1"
            style="background-color: #3b5998"
            href="https://www.facebook.com/"
            role="button"
            ><i class="fa fa-facebook-f"></i
          ></a>

          <!-- Twitter -->
          <a
            class="btn btn-primary btn-floating m-1"
            style="background-color: #55acee"
            href="https://twitter.com/"
            role="button"
            ><i class="fa fa-twitter"></i
          ></a>

          <!-- Google -->
          <a
            class="btn btn-primary btn-floating m-1"
            style="background-color: #dd4b39"
            href="https://www.google.com/"
            role="button"
            ><i class="fa fa-google"></i
          ></a>

          <!-- Instagram -->
          <a
            class="btn btn-primary btn-floating m-1"
            style="background-color: #ac2bac"
            href="https://www.instagram.com/"
            role="button"
            ><i class="fa fa-instagram"></i
          ></a>

          <!-- Linkedin -->
          <a
            class="btn btn-primary btn-floating m-1"
            style="background-color: #0082ca"
            href="https://www.linkedin.com/"
            role="button"
            ><i class="fa fa-linkedin"></i
          ></a>
          <!-- Github -->
          <a
            class="btn btn-primary btn-floating m-1"
            style="background-color: #333333"
            href="https://github.com/"
            role="button"
            ><i class="fa fa-github"></i
          ></a>
        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3 text-black" style="background-color: rgba(0, 0, 128, 0.2)" >
        © 2020 Copyright:
        <a class="text-black" href="http://localhost:8080/blogs">Blog</a>
      </div>
      <!-- Copyright -->
    </footer>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
