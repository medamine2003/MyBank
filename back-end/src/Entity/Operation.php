<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ApiResource]
#[ORM\Entity(repositoryClass: "App\Repository\OperationRepository")]
class Operation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'The title must not be blank.')]
    #[Assert\Length(
        max: 255,
        maxMessage: 'The title cannot be longer than {{ limit }} characters.'
    )]
    private ?string $title = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    #[Assert\NotBlank(message: 'The amount must not be blank.')]
    #[Assert\Type(
        type: 'numeric',
        message: 'The amount must be a valid number.'
    )]
    private ?string $amount = null;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: 'The category must not be blank.')]
    #[Assert\Choice(
        choices: ['Fun', 'Daily Expenses', 'Transport'],
        message: 'The category must be one of "Fun", "Daily Expenses", or "Transport".'
    )]
    private ?string $category = null;

    #[ORM\Column(type: 'datetime')]
    #[Assert\NotBlank(message: 'The date must not be blank.')]
    #[Assert\Type(
        type: \DateTimeInterface::class,
        message: 'The date must be a valid DateTime object.'
    )]
    private ?\DateTimeInterface $date = null;

    // Getters and setters

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getAmount(): ?string
    {
        return $this->amount;
    }

    public function setAmount(string $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
