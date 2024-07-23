<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MarkerResource\Pages;
use App\Filament\Resources\MarkerResource\RelationManagers;
use App\Forms\Components\Maps;
use App\Forms\Components\Wizard;
use App\Models\Marker;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MarkerResource extends Resource
{
    protected static ?string $model = Marker::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make([
                    'default' => 1,
                    'sm' => 3,
                    'xl' => 6,
                    '2xl' => 8,
                ])->schema([
                    Section::make('Details')
                        ->columnSpan(2)
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->label('Nama')
                                ->required(),
                            Forms\Components\TextInput::make('lat')
                                ->id('lat')
                                ->label('Latitude')
                                ->required(),
                            Forms\Components\TextInput::make('lng')
                                ->id('lng')
                                ->label('Longitude')
                                ->required(),
                            Forms\Components\Textarea::make('description')
                                ->label('Deskripsi'),
                            Forms\Components\FileUpload::make('image')
                                ->label('Gambar')
                                ->image(),
                        ]),
                    Section::make('Maps')
                        ->id('maps')
                        ->columnSpan(4)
                        ->schema([
                            Maps::make()
                        ])
                ])->columns(2),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('lat'),
                Tables\Columns\TextColumn::make('lng'),
                Tables\Columns\ImageColumn::make('image'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMarkers::route('/'),
            'create' => Pages\CreateMarker::route('/create'),
            'edit' => Pages\EditMarker::route('/{record}/edit'),
        ];
    }
}
