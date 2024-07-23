<x-layout>
    <div class="relative w-full h-full overflow-hidden">
        <div id="sidebar" data-state="close" data-current="" class="w-full p-4 h-[60vh] bottom-0 rounded-t-3xl shadow-2xl md:left-2 translate-y-[60vh] md:translate-y-0 md:-translate-x-[25rem] md:top-32 fixed z-[99999999999] md:h-[80vh] md:w-96 bg-gray-100 md:border-2 border-gray-300 md:rounded-xl md:shadow-xl transition-all duration-300 overflow-auto">
        </div>
        <div id="map-id" class="h-screen w-full"></div>
    </div>
    <script>
        const markers = @json($markers);
    </script>
    @vite("resources/js/markers.js")
</x-layout>
