<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AdvertisingCampaignSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\AdvertisingCampaign::factory(10)->create();
    }
}