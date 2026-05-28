<template>

    <SidebarComponent />
  <div class="flex-grow-1 p-4 bg-light">
    <h2>Productos</h2>
    <button class="btn btn-success mb-3" @click="$router.push('/Products/new')">Nuevo</button>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-if="success" class="alert alert-success">{{ success }}</div>

    <ProductsTable
      :products="products"
      @edit="goEdit"
      @delete="handleDelete"
    />

    <div class="mt-3">
      <button class="btn btn-success" @click="goCreate">Agregar producto</button>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import { ref, onMounted } from 'vue'
import productService from '@/services/productService'
import ProductsTable from '@/components/ProductsTable.vue'
import { useRouter } from 'vue-router'

export default {
  components: { ProductsTable },
  setup() {
    const products = ref([])
    const error = ref(null)
    const success = ref(null)
    const router = useRouter()

    const load = async () => {
      error.value = null
      try {
        const res = await productService.getAllProducts()
        products.value = res.data
        console.log(products)
      } catch (err) {
        error.value = 'Error cargando productos'
        console.error(err)
      }
    }

    const goEdit = (id) => {
      router.push({ name: 'ProductEdit', params: { id } })
    }

    const goCreate = () => {
      router.push({ name: 'ProductCreate' })
    }

    const handleDelete = async (id) => {
      error.value = null
      success.value = null
      try {
        await productService.deleteProduct(id)
        success.value = 'Producto eliminado correctamente'
        await load()
      } catch (err) {
        error.value = 'Error eliminando producto'
        console.error(err)
      }
    }

    onMounted(load)

    return { products, error, success, goEdit, goCreate, handleDelete }
  }
}
</script>