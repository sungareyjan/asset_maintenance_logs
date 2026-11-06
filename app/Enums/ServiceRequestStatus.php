<?php

namespace App\Enums;

enum ServiceRequestStatus: string
{
    case QUEUED      = 'QUEUED';
    case IN_PROGRESS = 'IN_PROGRESS';
    case COMPLETED   = 'COMPLETED';
}