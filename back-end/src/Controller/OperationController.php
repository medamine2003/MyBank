<?php
// src/Controller/OperationController.php
namespace App\Controller;

use App\Entity\Operation;
use App\Repository\OperationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class OperationController extends AbstractController
{
    /**
     * @Route("/api/operations", name="create_operation", methods={"POST"})
     */
    public function createOperation(Request $request, EntityManagerInterface $entityManager)
    {
        $data = json_decode($request->getContent(), true);

        if (!$data || !isset($data['title'], $data['amount'], $data['category'], $data['date'])) {
            return $this->json([
                'error' => 'Invalid data. Please provide title, amount, category, and date.'
            ], Response::HTTP_BAD_REQUEST);
        }
        
    }

    /**
     * @Route("/api/operations", name="get_operations", methods={"GET"})
     */
    public function getOperations(OperationRepository $operationRepository)
    {
        $operations = $operationRepository->findAll();
        return $this->json($operations);
    }
}
