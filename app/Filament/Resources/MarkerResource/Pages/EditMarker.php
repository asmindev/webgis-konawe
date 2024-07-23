<?php

namespace App\Filament\Resources\MarkerResource\Pages;

use App\Filament\Resources\MarkerResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditMarker extends EditRecord
{
    protected static string $resource = MarkerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
