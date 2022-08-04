const { default: axios } = require("axios");

newFunction();
function newFunction() {
    <script>
        import AppLayout from '@/Layouts/AppLayout.vue';
        
        export default {
            components: {
                AppLayout,
            },
            data() {
                return {
                    users: []
                }
            },
            mounted() {
                axios.get('/api/users').then(response => {
                    this.users = response.data.users;
                })
            }
        }
    </script>
    ,
    <template>
        <AppLayout title="Chat">
            <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Chat
                </h2>
            </template>
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg flex" style="min-height: 400px;max-height: 400px;">
                        <!-- Lista de usuários -->
                        <div class="w-4/12 bg-gray-200 bg-opacity-30 border-r border-gray-150 overflow-y-scroll">
                            <ul>
                                <li 
                                v-for="user in users" :key="user.id"
                                class="p-6 text-lg text-gray-600 leading-7 font-semibold border-bborder-gray-200 hover:bg-gray-300 hover:bg-opacity-50 hover:cursor-pointer">
                                    <p class="flex items-center">
                                        {{ user.name }}
                                        <span class="ml-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        
                        <!-- Box de mensagens -->
                        <div class="w-8/12 flex flex-col justify-between overflow-y-scroll">
                            <!-- Mensagens -->
                            <div class="w-full p-6 flex flex-col">
                                <div class="w-full mb-3 text-right">
                                    <p class="inline-block p-2 rounded-md messageFromMe" style="max-width: 75%;">
                                        Olá!
                                    </p>
                                    <span class="block mt-1 text-xs text-gray-500">02/08/2022 21:30</span>
                                </div>
                            </div>
                            
                            <div class="w-full p-6 flex flex-col">
                                <div class="w-full mb-3">
                                    <p class="inline-block p-2 rounded-md messageToMe" style="max-width: 75%;">
                                        Oi!
                                    </p>
                                    <span class="block mt-1 text-xs text-gray-500">02/08/2022 21:30</span>
                                </div>
                            </div>
                        
                            <!-- Formulário para envio das mensagens -->
                            <div class="w-full bg-gray-200 bg-opacity-25 p-6 border-t border-gray-200">
                                <form>
                                    <div class="flex rounded-md overflow-hidden border border-gray-100">
                                        <input type="text" class="flex-1 px-4 py-2 text-sm border-transparentfocus:border-transparent focus:ring-0">
                                        <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-whitepx-4 py-2">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    </template>;
    
    <style>
        .messageFromMe {
            @apply bg-green-300 bg-opacity-25;
        }
        
        .messageToMe {
            @apply bg-gray-300 bg-opacity-25
        }
    </style>
}

