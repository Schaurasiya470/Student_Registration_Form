<?php
// Start the built-in server on port 8000
$server = php_sapi_name() === 'cli' ? new Http\Server(ROOT_PATH, 8000) : null;

if ($server !== null) {
  echo "Server running at http://localhost:8000/\n";
  $server->start();
} else {
  echo "Built-in server not available in this SAPI\n";
}
