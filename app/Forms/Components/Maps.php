<?php

namespace App\Forms\Components;

use Filament\Forms\Components\Component;

class Maps extends Component
{
    protected string $view = 'forms.components.maps';

    public static function make(): static
    {
        return app(static::class);
    }
}
