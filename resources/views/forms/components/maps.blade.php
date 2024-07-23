<div {{ $attributes }} wire:ignore>
    {{ $getChildComponentContainer() }}
    <div class="h-96 w-full" id="map-id"></div>
    @vite("resources/js/formMaps.js")
</div>
