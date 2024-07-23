<?php

namespace App\Filament\Resources\MarkerResource\Pages;

use App\Filament\Resources\MarkerResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMarkers extends ListRecords
{
    protected static string $resource = MarkerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
